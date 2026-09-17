import { TrustPage } from '@/components/trust/TrustPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Trust & data',
  'Understand Cortexa’s data handling, retention, provenance, human review, and known limitations.',
  '/trust',
);
export default function Page() {
  return <TrustPage />;
}
