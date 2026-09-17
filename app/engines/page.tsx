import { EnginesPage } from '@/components/engines/EnginesPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Harvest & Seed',
  'Harvest finds inventions in completed research. Seed explores new directions through your roadmap and invention lattice.',
  '/engines',
);
export default function Page() {
  return <EnginesPage />;
}
