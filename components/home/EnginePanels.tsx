import { engines } from '@/data/content';
import {
  ArrowUpRight,
  Files,
  Lightbulb,
  Search,
  ChartNoAxesColumnIncreasing,
  Map,
  Sprout,
  Network,
  Compass,
} from 'lucide-react';
import Link from 'next/link';
const stepIcons = [
  [Files, Lightbulb, Search, ChartNoAxesColumnIncreasing],
  [Map, Sprout, Network, Compass],
];
export function EnginePanels({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="engine-panels grid [grid-template-columns:1fr_1fr] gap-0 [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)]">
      {engines.map((engine, index) => (
        <article
          key={engine.name}
          className={`engine-panel [padding:42px_46px_38px] min-w-0 ${engine.name.toLowerCase()}`}
          data-reveal
        >
          <div className="engine-mark" aria-hidden="true" />
          <div className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
            Engine 0{index + 1}
            <span>{engine.name}</span>
          </div>
          <h3>{detailed ? engine.title : engine.question}</h3>
          <p>
            {engine.name === 'Harvest'
              ? "Finds inventions in work you've already done."
              : 'Suggests new directions you could patent next.'}
          </p>
          {detailed && <p>{engine.description}</p>}
          <ol>
            {engine.steps.map((step, i) => {
              const Icon = stepIcons[index][i];
              return (
                <li key={step}>
                  <span className="engine-step-number text-[11px] text-(--muted)">0{i + 1}</span>
                  <span
                    className="engine-step-icon inline-flex shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span>{step}</span>
                </li>
              );
            })}
          </ol>
          {detailed ? (
            <p>{engine.detail}</p>
          ) : (
            <Link href="/engines">
              Explore {engine.name}
              <ArrowUpRight size={16} />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
