import { engines } from '@/data/content';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export function EnginePanels({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="engine-panels grid [grid-template-columns:1fr_1fr] gap-0 [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)]">
      {engines.map((engine, index) => (
        <article
          key={engine.name}
          className={`engine-panel [padding:42px_46px_38px] min-w-0 ${engine.name.toLowerCase()}`}
          data-reveal
        >
          <div className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
            ENGINE 0{index + 1}
            <span>{engine.name}</span>
          </div>
          <h3>{detailed ? engine.title : engine.question}</h3>
          {detailed && <p>{engine.description}</p>}
          <ol>
            {engine.steps.map((step, i) => (
              <li key={step}>
                <span className="engine-step-number text-[11px] text-(--muted)">0{i + 1}</span>
                <span>{step}</span>
                {i < 3 && <ArrowDown size={13} />}
              </li>
            ))}
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
