import { PricingPage } from '@/components/pricing/PricingPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Pricing',
  'Cortexa is priced per corpus, not per seat. Compare Lab, Department, Agency, and Enterprise plans.',
  '/pricing',
);
export default function Page() {
  return <PricingPage />;
}
