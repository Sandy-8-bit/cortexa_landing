import { FaqPage } from '@/components/faq/FaqPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'FAQ',
  'Answers about invention discovery, confidential research, code analysis, evidence scores, languages, and analysis times.',
  '/faq',
);
export default function Page() {
  return <FaqPage />;
}
