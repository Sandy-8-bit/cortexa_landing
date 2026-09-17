'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faq } from '@/data/faq';
export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faq.map((item, i) => (
        <article className={`faq-item ${open === i ? 'open' : ''}`} key={item.title}>
          <h2>
            <button
              id={`faq-button-${i}`}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="faq-number">0{i + 1}</span>
              <span>{item.title}</span>
              {open === i ? <Minus size={19} /> : <Plus size={19} />}
            </button>
          </h2>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-button-${i}`}
            className="faq-answer"
            inert={open !== i}
          >
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
