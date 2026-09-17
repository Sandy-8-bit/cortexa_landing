import { ProductPage } from '@/components/product/ProductPage';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Product',
  'Explore Cortexa in an interactive eight-step walkthrough, from research upload to evidence-linked invention candidates.',
  '/product',
);
export default function Page() {
  return <ProductPage />;
}
