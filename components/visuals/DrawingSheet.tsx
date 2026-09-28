type DrawingKind = 'archive' | 'lab' | 'blueprint' | 'evidence' | 'seed' | 'treasury';
const columns = [200, 288, 376, 464, 552, 640, 728];

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
function Archive({ secure, seed }: { secure: boolean; seed: boolean }) {
  return (
    <>
      <g className="drawing-lines">
        <path d="M142 302H818V310H142ZM158 290H802V302H158ZM174 282H786V290H174M162 122H798V134H162ZM174 110L480 30L786 110ZM204 104L480 44L756 104Z" />
        <path d="M184 142H776M184 150H776M176 112H784M192 138V282M768 138V282M196 272H764" />
        {columns.map((x) => (
          <g key={x}>
            <path
              d={`M${x - 12} 134h48v12h-48ZM${x - 8} 146h40v8h-40ZM${x} 154h24v108h-24ZM${x - 8} 262h40v10h-40ZM${x - 12} 272h48v10h-48Z`}
            />
            {Array.from({ length: 12 }, (_, i) => (
              <path key={i} d={`M${x} ${158 + i * 8}h24m-20 3h16`} />
            ))}
          </g>
        ))}
        {[252, 340, 428, 516, 604, 692].map((x) => (
          <path
            key={x}
            d={`M${x} 272V190a16 16 0 0 1 32 0v82M${x + 5} 272V192a11 11 0 0 1 22 0v80`}
          />
        ))}
        <path d="M462 97V66a18 18 0 0 1 36 0v31M466 94V67a14 14 0 0 1 28 0v27M480 52V98M464 74H496" />
        <path d="M112 328H848M142 320V338M818 320V338M142 332H818M138 336l8-8M814 336l8-8" />
        <path
          className="drawing-construction"
          d="M480 12V316M126 122H834M174 22V320M786 22V320M126 282H834"
        />
        {seed && (
          <path
            strokeDasharray="4 5"
            d="M602 18V284M690 18V284M778 18V284M602 34H822M602 74H822M602 114H822M602 34L778 114M778 34L602 114M602 34L690 18L822 58V282H778"
          />
        )}
      </g>
      <g className="scan-findings">
        <Pixels x={208} y={192} />
        <Pixels x={464} y={144} />
        <Pixels x={648} y={224} outline={seed} />
        {seed && <Pixels x={704} y={40} outline />}
        {secure && (
          <g className="drawing-pixels">
            <rect x="472" y="224" width="24" height="24" />
            <path
              d="M476 224v-8a8 8 0 0 1 16 0v8"
              fill="none"
              stroke="var(--cx-blue)"
              strokeWidth="2"
            />
          </g>
        )}
      </g>
      <g className="drawing-callouts">
        <path d="M222 204H104V172H38M490 155H858V122H916M680 249H866V270H916" />
        <text x="38" y="157">
          Source material
        </text>
        <text x="774" y="106">
          {secure ? 'Workspace protected' : 'Evidence-linked idea'}
        </text>
        <text x="805" y="290">
          {seed ? 'Next direction' : 'Prior art checked'}
        </text>
        <text x="480" y="359" textAnchor="middle">
          Research, read a different way
        </text>
      </g>
    </>
  );
}
function Lab() {
  return (
    <>
      <g className="drawing-lines">
        <path d="M158 308H810M174 296H794V90H174ZM166 82H802V90H166M174 192H794M174 200H794M366 90V296M374 90V296M574 90V296M582 90V296" />
        {[206, 406, 614].map((x) => (
          <g key={x}>
            <path
              d={`M${x} 170h120v8h-120ZM${x + 8} 178v14M${x + 110} 178v14M${x} 272h120v8h-120ZM${x + 8} 280v16M${x + 110} 280v16M${x + 64} 112h42v36h-42ZM${x + 85} 148v22M${x + 73} 170h24`}
            />
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${x + 8} ${163 - i * 6}h38v6h-38ZM${x + 68} ${266 - i * 6}h40v6h-40Z`}
              />
            ))}
            <path d={`M${x + 8} 246h32l-10-22v-10h-12v10ZM${x + 46} 238h10v34`} />
          </g>
        ))}
        <path
          d="M158 326H810M174 318V334M794 318V334M158 50V306M810 50V306"
          strokeDasharray="3 5"
        />
      </g>
      <Pixels x={220} y={130} />
      <Pixels x={480} y={234} />
      <Pixels x={680} y={124} />
      <g className="drawing-callouts">
        <path d="M242 138H112V114H32M706 136H844V104H916" />
        <text x="32" y="98">
          Papers &amp; lab notes
        </text>
        <text x="790" y="88">
          Unlabelled inventions
        </text>
        <text x="480" y="356" textAnchor="middle">
          A section through your research
        </text>
      </g>
    </>
  );
}
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
        <text x="102" y="67">
          {evidence ? 'Patent' : 'Read'}
        </text>
        <text x="810" y="67">
          {evidence ? 'Paper' : 'Find'}
        </text>
        <text x="102" y="350">
          {evidence ? 'Repository' : 'Check'}
        </text>
        <text x="810" y="350">
          {evidence ? 'Market' : 'Rank'}
        </text>
        <text x="480" y="364" textAnchor="middle">
          {evidence ? 'Every claim has a source' : 'One document. Four passes.'}
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
      viewBox="0 0 960 392"
      fill="none"
      aria-hidden="true"
    >
      {kind === 'lab' ? (
        <Lab />
      ) : kind === 'blueprint' || kind === 'evidence' ? (
        <Blueprint evidence={kind === 'evidence'} />
      ) : (
        <Archive secure={kind === 'treasury'} seed={kind === 'seed'} />
      )}
      {scan && <path className="scan-edge" d="M0 28V312" />}
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
