type DrawingKind = 'archive' | 'lab' | 'blueprint' | 'evidence' | 'seed' | 'treasury';
type Pt = [number, number];
type Proj = (x: number, y: number, z?: number) => Pt;

const round = (n: number) => Math.round(n * 10) / 10;
const rad = (deg: number) => (deg * Math.PI) / 180;

/* Axonometric projection: x runs right-down, y runs left-down, z runs up. */
function projection(ox: number, oy: number, s: number, ax = 30, ay = 30) {
  const [cx, sx, cy, sy] = [Math.cos(rad(ax)), Math.sin(rad(ax)), Math.cos(rad(ay)), Math.sin(rad(ay))];
  const p: Proj = (x, y, z = 0) => [ox + (x * cx - y * cy) * s, oy + (x * sx + y * sy) * s - z * s];
  const plane = (x: number, y: number, z: number) => {
    const [e, f] = p(x, y, z);
    return `matrix(${round(cx * s)} ${round(sx * s)} ${round(-cy * s)} ${round(sy * s)} ${round(e)} ${round(f)})`;
  };
  return { p, plane };
}
const path = (pts: Pt[], close = true) =>
  'M' + pts.map(([a, b]) => `${round(a)} ${round(b)}`).join('L') + (close ? 'Z' : '');
const quad = (p: Proj, x: number, y: number, z: number, w: number, d: number) =>
  path([p(x, y, z), p(x + w, y, z), p(x + w, y + d, z), p(x, y + d, z)]);

function Box({
  p,
  x,
  y,
  z,
  w,
  d,
  h,
  tone = 'paper',
}: {
  p: Proj;
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  tone?: 'paper' | 'pixel' | 'seed';
}) {
  return (
    <g className={`iso-${tone}`}>
      <path
        className="face-right"
        d={path([p(x + w, y, z), p(x + w, y + d, z), p(x + w, y + d, z + h), p(x + w, y, z + h)])}
      />
      <path
        className="face-left"
        d={path([p(x, y + d, z), p(x + w, y + d, z), p(x + w, y + d, z + h), p(x, y + d, z + h)])}
      />
      <path className="face-top" d={quad(p, x, y, z + h, w, d)} />
    </g>
  );
}

/* Pixel cubes on a lattice, painted back to front. */
function Cubes({
  p,
  cells,
  size = 1,
  at = [0, 0, 0],
  tone = 'pixel',
}: {
  p: Proj;
  cells: [number, number, number][];
  size?: number;
  at?: [number, number, number];
  tone?: 'pixel' | 'seed';
}) {
  return (
    <>
      {[...cells]
        .sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]))
        .map(([x, y, z]) => (
          <Box
            key={`${x}-${y}-${z}`}
            p={p}
            x={at[0] + x * size}
            y={at[1] + y * size}
            z={at[2] + z * size}
            w={size}
            d={size}
            h={size}
            tone={tone}
          />
        ))}
    </>
  );
}

/* A sheet of paper lying flat, with ruled text lines on top. */
function Sheet({
  p,
  x,
  y,
  z,
  w,
  d,
  lines = 0,
}: {
  p: Proj;
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  lines?: number;
}) {
  const top = z + 0.3;
  return (
    <g>
      <Box p={p} x={x} y={y} z={z} w={w} d={d} h={0.3} />
      {lines > 0 && (
        <path
          className="iso-rule"
          d={Array.from({ length: lines }, (_, i) => {
            const v = y + 3 + i * ((d - 4) / lines);
            const end = x + w - 1.2 - (i % 4 === 3 ? w * 0.35 : 0);
            return path([p(x + 1.2, v, top), p(end, v, top)], false);
          }).join('')}
        />
      )}
    </g>
  );
}

/* Tiles that sit on a sheet: fragments Cortexa has marked. */
function Marks({
  p,
  z,
  runs,
  outline = false,
}: {
  p: Proj;
  z: number;
  runs: [number, number, number][];
  outline?: boolean;
}) {
  return (
    <g className={outline ? 'iso-mark seed' : 'iso-mark'}>
      {runs.flatMap(([u, v, n]) =>
        Array.from({ length: n }, (_, i) => (
          <path key={`${u}-${v}-${i}`} d={quad(p, u + i * 1.05, v - 0.5, z, 0.9, 0.9)} />
        )),
      )}
    </g>
  );
}

function IsoLabel({ plane, children, size = 1.2 }: { plane: string; children: string; size?: number }) {
  return (
    <text className="iso-label" transform={plane} fontSize={size}>
      {children}
    </text>
  );
}

/* Hero: the four passes, each on its own plate of one shared ground plane.
   Read a stack of research, find the invention, check it against prior art, rank it. */
function Corpus() {
  const { p, plane } = projection(480, 190, 11);
  const plateSize = 11.5;
  /* Plate origin whose centre lands at screen x = cx on a common ground line. */
  const plate = (cx: number): [number, number] => {
    const u = (cx - 480) / (Math.cos(rad(30)) * 11);
    const v = (232 - 190) / (0.5 * 11);
    return [(u + v) / 2 - plateSize / 2, (v - u) / 2 - plateSize / 2];
  };
  const [read, find, check, rank] = [128, 364, 600, 836].map(plate);
  const cluster: [number, number, number][] = [];
  [
    [4, 3, 3, 1],
    [3, 3, 2, 1],
    [3, 2, 1, 0],
    [1, 1, 0, 0],
  ].forEach((row, x) => row.forEach((h, y) => Array.from({ length: h }, (_, z) => cluster.push([x, y, z]))));
  const scores = [5, 4, 5, 3, 5];
  const steps: [[number, number], string][] = [
    [read, '01  Read'],
    [find, '02  Find'],
    [check, '03  Check'],
    [rank, '04  Rank'],
  ];
  return (
    <>
      <g className="drawing-lines">
        {steps.map(([[x, y], label]) => (
          <g key={label}>
            <path className="drawing-construction" d={quad(p, x, y, 0, plateSize, plateSize)} />
            <IsoLabel plane={plane(x + 1, y + plateSize + 1.7, 0)} size={1.15}>
              {label}
            </IsoLabel>
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <Sheet key={i} p={p} x={read[0] + 1.5} y={read[1] + 0.8} z={i * 0.9} w={8.5} d={10} lines={i === 2 ? 6 : 0} />
        ))}
        <IsoLabel plane={plane(read[0] + 2.6, read[1] + 2.9, 2.1)} size={1.1}>
          thesis.pdf
        </IsoLabel>
        {['Code', 'Papers', 'Patents'].map((label, i) => (
          <g key={label}>
            <Sheet p={p} x={check[0] + 2} y={check[1] + 1.5} z={0.4 + i * 3.4} w={7.5} d={8.5} />
            <IsoLabel plane={plane(check[0] + 3, check[1] + 8.8, 0.7 + i * 3.4)} size={1.2}>
              {label}
            </IsoLabel>
          </g>
        ))}
      </g>
      <g className="scan-findings">
        <Marks
          p={p}
          z={2.1}
          runs={[
            [read[0] + 4.6, read[1] + 5.2, 3],
            [read[0] + 3, read[1] + 6.8, 2],
            [read[0] + 5.6, read[1] + 8.4, 3],
          ]}
        />
        <Cubes p={p} cells={cluster} size={1.7} at={[find[0] + 2.4, find[1] + 2.4, 0]} />
        <Marks p={p} z={7.5} runs={[[check[0] + 3.4, check[1] + 5.6, 3]]} />
        {scores.map((h, i) => (
          <Cubes
            key={i}
            p={p}
            cells={Array.from({ length: h }, (_, z) => [0, 0, z] as [number, number, number])}
            size={1.3}
            at={[rank[0] + 0.8 + i * 2.1, rank[1] + 5, 0]}
            tone={i === 3 ? 'seed' : 'pixel'}
          />
        ))}
      </g>
    </>
  );
}

/* Research section: a lab's files, some of which contain inventions no one has labelled. */
function Files() {
  const { p, plane } = projection(410, 36, 10);
  const files = [
    'thesis.pdf',
    'results_v3.docx',
    'train.py',
    'grant_report.pdf',
    'notes.tex',
    'cell_data.ipynb',
    'review_2024.pdf',
    'repo/README',
  ];
  const found: Record<number, [number, number, number][]> = {
    1: [
      [2.6, 5.6, 3],
      [1.6, 6.8, 2],
    ],
    4: [[1.6, 5.6, 4]],
    6: [
      [3.6, 4.4, 2],
      [1.6, 5.6, 4],
      [2.6, 6.8, 1],
    ],
  };
  const tiles = files
    .map((name, i) => ({ name, i, x: (i % 4) * 11.5, y: Math.floor(i / 4) * 12 }))
    .sort((a, b) => a.x + a.y - (b.x + b.y));
  return (
    <>
      {tiles.map(({ name, i, x, y }) => (
        <g key={name}>
          <g className="drawing-lines">
            <Box p={p} x={x} y={y} z={0} w={9.5} d={9.5} h={0.6} />
            <IsoLabel plane={plane(x + 1, y + 2.2, 0.6)} size={1.05}>
              {name}
            </IsoLabel>
            <path
              className="iso-rule"
              d={[3.8, 5.1, 6.4, 7.7].map((v) => path([p(x + 1, y + v, 0.6), p(x + 8.5, y + v, 0.6)], false)).join('')}
            />
          </g>
          {found[i] && (
            <Marks p={p} z={0.6} runs={found[i].map(([u, v, n]) => [x + u, y + v, n] as [number, number, number])} />
          )}
        </g>
      ))}
    </>
  );
}

/* Engines: pixel columns over time. Grey is existing research, blue is what Harvest finds, outlines are Seed directions. */
function Timeline() {
  const count = 48;
  const cell = 12;
  const base = 318;
  const start = 120;
  const today = 30;
  const height = (i: number) => Math.round(5 + 7 * Math.abs(Math.sin(i * 1.3)) + (i / count) * 8);
  return (
    <>
      <g className="drawing-lines">
        <path d={`M${start - 20} ${base + 6}H${start + count * 15 + 8}`} />
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${start + i * 90} ${base + 6}v8`} />
        ))}
        <path className="drawing-construction" d={`M${start + today * 15 - 2} 40V${base + 20}`} />
      </g>
      {Array.from({ length: count }, (_, i) => {
        const h = height(i);
        const seed = i >= today;
        const x = start + i * 15;
        return (
          <g key={i} className={seed ? 'drawing-pixels seed-pixels' : undefined}>
            {Array.from({ length: seed ? Math.max(h - 6, 2) : h }, (_, r) => {
              const found = !seed && r >= h - (i % 5 === 1 ? 4 : i % 7 === 3 ? 3 : 0);
              return (
                <rect
                  key={r}
                  className={seed ? undefined : found ? 'pixel-found' : 'pixel-research'}
                  x={x}
                  y={base - (r + 1) * cell}
                  width={cell - 2}
                  height={cell - 2}
                />
              );
            })}
          </g>
        );
      })}
      <g className="drawing-callouts">
        <text x={start} y={base + 44}>
          Harvest: inventions already in your work
        </text>
        <text x={start + today * 15 + 12} y={base + 44}>
          Seed: directions worth filing next
        </text>
        <text x={start + today * 15 + 12} y="48">
          Today
        </text>
      </g>
    </>
  );
}

/* Trust: the corpus inside a closed workspace, held by a lock. */
function Vault() {
  const room = projection(480, 140, 12);
  const lock = projection(462, 142, 15);
  const { p } = room;
  const edges = (w: number, d: number, h: number) => {
    const c = (x: number, y: number, z: number) => p(x, y, z);
    return [
      [c(0, 0, 0), c(w, 0, 0), c(w, d, 0), c(0, d, 0)],
      [c(0, 0, h), c(w, 0, h), c(w, d, h), c(0, d, h)],
    ]
      .map((pts) => path(pts))
      .concat(
        [
          [0, 0],
          [w, 0],
          [w, d],
          [0, d],
        ].map(([x, y]) => path([c(x, y, 0), c(x, y, h)], false)),
      )
      .join('');
  };
  const shackle: [number, number, number][] = [
    [0, 0, 3],
    [3, 0, 3],
    [0, 0, 4],
    [3, 0, 4],
    [0, 0, 5],
    [1, 0, 5],
    [2, 0, 5],
    [3, 0, 5],
  ];
  const body: [number, number, number][] = [];
  for (let x = 0; x < 4; x++)
    for (let z = 0; z < 3; z++) if (!(x === 2 && z === 1)) body.push([x, 0, z]);
  return (
    <>
      <g className="drawing-lines">
        <path className="drawing-construction" d={edges(22, 18, 11)} />
        {Array.from({ length: 4 }, (_, i) => (
          <Sheet key={i} p={p} x={5} y={4} z={i * 0.9} w={12} d={10} lines={i === 3 ? 6 : 0} />
        ))}
      </g>
      <g className="scan-findings">
        <Cubes p={lock.p} cells={[...body, ...shackle].map(([x, y, z]) => [x + 3, y + 4, z + 0.5])} />
      </g>
    </>
  );
}

function Pixels({ x, y, outline = false }: { x: number; y: number; outline?: boolean }) {
  return (
    <g className={outline ? 'drawing-pixels seed-pixels' : 'drawing-pixels'}>
      {[
        [0, 16],
        [8, 8],
        [8, 16],
        [8, 24],
        [16, 0],
        [16, 8],
        [16, 16],
        [16, 32],
        [24, 8],
        [24, 24],
        [32, 0],
        [32, 8],
        [32, 16],
        [40, 8],
      ].map(([dx, dy], i) => (
        <rect key={i} x={x + dx} y={y + dy} width="7" height="7" />
      ))}
    </g>
  );
}

/* A single document at the centre, with the four passes (or four evidence sources) around it. */
function Blueprint({ evidence }: { evidence: boolean }) {
  return (
    <>
      <g className="drawing-lines">
        <path d="M326 58H578L610 90V310H326ZM578 58V90H610M348 112H584M348 126H544M348 176H584M348 190H574M348 204H550M348 248H584M348 262H564M348 276H540" />
        <path
          d="M350 78h60v16h-60M310 42H626M310 326H626M310 34V334M626 34V334"
          strokeDasharray="3 5"
        />
        <path d="M326 148H220V112H116M610 148H720V112H836M610 232H720V286H836M326 232H220V286H116" />
        {[
          { x: 104, y: 82 },
          { x: 808, y: 82 },
          { x: 104, y: 256 },
          { x: 808, y: 256 },
        ].map(({ x, y }) => (
          <path
            key={`${x}-${y}`}
            d={`M${x} ${y}h56v68h-56ZM${x + 10} ${y + 16}h34m-34 10h34m-34 10h24m-24 10h28`}
          />
        ))}
        <path d="M360 302V294H576V302" />
      </g>
      <Pixels x={360} y={140} />
      <Pixels x={488} y={212} />
      <g className="drawing-callouts">
        <text x="104" y="68">
          {evidence ? 'Patent' : 'Read'}
        </text>
        <text x="808" y="68">
          {evidence ? 'Paper' : 'Find'}
        </text>
        <text x="104" y="352">
          {evidence ? 'Repository' : 'Check'}
        </text>
        <text x="808" y="352">
          {evidence ? 'Market' : 'Rank'}
        </text>
      </g>
    </>
  );
}
export function DrawingSheet({
  kind = 'archive',
  scan = false,
  className = '',
}: {
  kind?: DrawingKind;
  scan?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`drawing-sheet ${scan ? 'hero-scan' : ''} ${className}`}
      viewBox={kind === 'archive' ? '0 80 960 250' : '0 0 960 392'}
      fill="none"
      aria-hidden="true"
    >
      {kind === 'lab' ? (
        <Files />
      ) : kind === 'blueprint' || kind === 'evidence' ? (
        <Blueprint evidence={kind === 'evidence'} />
      ) : kind === 'seed' ? (
        <Timeline />
      ) : kind === 'treasury' ? (
        <Vault />
      ) : (
        <Corpus />
      )}
      {scan && <path className="scan-edge" d="M0 28V340" />}
    </svg>
  );
}
export function drawingForPage(label: string): DrawingKind {
  if (/trust/i.test(label)) return 'treasury';
  if (/agenc/i.test(label)) return 'lab';
  if (/engine/i.test(label)) return 'seed';
  if (/evidence|question/i.test(label)) return 'evidence';
  if (/product|how|pricing/i.test(label)) return 'blueprint';
  return 'archive';
}
