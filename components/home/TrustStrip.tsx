import Link from 'next/link';
import { PageContainer } from '@/components/ui/Primitives';

const commitments = [
  'Your data never trains our models',
  'Encrypted in transit and at rest',
  'NDA and on-prem options available',
  'Only your team can see your results',
];

export function TrustStrip() {
  return (
    <aside aria-label="Trust and data" className="trust-strip">
      <PageContainer>
        <ul className="trust-cells">
          {commitments.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <Link href="/trust" className="trust-link">
          Read Trust &amp; data
        </Link>
      </PageContainer>
    </aside>
  );
}
