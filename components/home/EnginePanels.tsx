import { engines } from '@/data/content';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
export function EnginePanels({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="engine-panels">
      {engines.map((engine, index) => (
        <article
          key={engine.name}
          className={`engine-panel ${engine.name.toLowerCase()}`}
          data-reveal
        >
          <div className="technical-label">
            ENGINE 0{index + 1}
            <span>{engine.name}</span>
          </div>
          <h3>{detailed ? engine.title : engine.question}</h3>
          {detailed && <p>{engine.description}</p>}
          <ol>
            {engine.steps.map((step, i) => (
              <li key={step}>
                <span className="engine-step-number">0{i + 1}</span>
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
