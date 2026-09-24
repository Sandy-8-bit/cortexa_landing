import Link from 'next/link';
import {
  ShieldCheck,
  LockKeyhole,
  FileCheck2,
  Users,
} from 'lucide-react';
import { PageContainer } from '@/components/ui/Primitives';

const commitments = [
  { icon: ShieldCheck, text: 'Your data never trains our models' },
  { icon: LockKeyhole, text: 'Encrypted in transit and at rest' },
  { icon: FileCheck2, text: 'NDA and on-prem options available' },
  { icon: Users, text: 'Only your team can see your results' },
];

export function TrustStrip() {
  return (
    <aside
      aria-label="Trust and data"
      className="border-y border-(--line) py-6"
    >
      <PageContainer>
        {/* Top: 4 trust commitments */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {commitments.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 text-sm"
            >
              <Icon
                size={20}
                className="shrink-0"
                aria-hidden="true"
              />

              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom-right: Trust link */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/trust"
            className="text-sm underline underline-offset-4"
          >
            Read Trust &amp; data →
          </Link>
        </div>
      </PageContainer>
    </aside>
  );
}