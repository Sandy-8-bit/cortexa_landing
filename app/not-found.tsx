import { Button, PageContainer, TechnicalLabel } from '@/components/ui/Primitives';
export default function NotFound() {
  return (
    <section className="not-found">
      <PageContainer>
        <TechnicalLabel>404 / PAGE NOT FOUND</TechnicalLabel>
        <h1>A different direction.</h1>
        <p>This page doesn’t exist. There’s more to discover back home.</p>
        <div className="actions">
          <Button href="/">Back to Cortexa</Button>
          <Button href="/product" variant="ghost">
            Explore the product
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
