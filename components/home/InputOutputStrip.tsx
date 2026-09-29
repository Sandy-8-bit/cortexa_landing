import { PageContainer } from '@/components/ui/Primitives';
export function InputOutputStrip() {
  return (
    <aside className="input-output alternate" aria-label="From research to ranked inventions">
      <PageContainer>
        <div className="io-flow">
          <p>
            <span>Goes in</span>Papers, code, reports, notebooks
          </p>
          <p>
            <span>Checked against</span>USPTO, EPO, WIPO, arXiv, Crossref, GitHub
          </p>
          <p>
            <span>Comes out</span>Ranked inventions with prior art
          </p>
        </div>
      </PageContainer>
    </aside>
  );
}
