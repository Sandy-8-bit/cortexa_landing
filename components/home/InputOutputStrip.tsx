import { PageContainer } from '@/components/ui/Primitives';
export function InputOutputStrip() {
  return (
    <aside className="input-output alternate" aria-label="From research to ranked inventions">
      <PageContainer>
        <div className="io-flow">
          <p>
            <span>Goes in</span>Document, Code, Designs, Notebooks, GitHub, Azure
          </p>
          <p>
            <span>Checked against</span>USPTO, WIPO, EPO and Google Scholar
          </p>
          <p>
            <span>Comes out</span>Ranked inventions with prior art
          </p>
        </div>
      </PageContainer>
    </aside>
  );
}
