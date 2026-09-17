import { HowItWorksPage } from '@/components/how/HowItWorksPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'How it works',
  'Seven stages take your research from source documents to an evidence-backed opportunity map and patent strategy.',
  '/how-it-works',
);
export default function Page() {
  return <HowItWorksPage />;
}
