import { ContactPage } from '@/components/contact/ContactPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Get started',
  'Bring one research corpus and explore what Cortexa can find. Try the demonstration request form.',
  '/contact',
);
export default function Page() {
  return <ContactPage />;
}
