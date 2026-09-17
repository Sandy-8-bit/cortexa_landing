import { EvidencePage } from '@/components/evidence/EvidencePage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Evidence',
  'Trace every invention verdict to patents, publications, code, and market signals with the interactive evidence graph.',
  '/evidence',
);
export default function Page() {
  return <EvidencePage />;
}
