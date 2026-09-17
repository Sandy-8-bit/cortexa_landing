import { AgenciesPage } from '@/components/agencies/AgenciesPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'For agencies',
  'Explore client workspaces, a shared invention docket, evidence trails, and per-matter billing for patent agencies and IP firms.',
  '/agencies',
);
export default function Page() {
  return <AgenciesPage />;
}
