import { FileText, Code2, NotebookPen, ListOrdered } from 'lucide-react';
import { PageContainer } from '@/components/ui/Primitives';
import { CortexaLogo } from '@/components/branding/CortexaLogo';
export function InputOutputStrip() {
  return (
    <aside className="input-output alternate" aria-label="From research to ranked inventions">
      <PageContainer>
        <div className="io-flow">
          <div>
            <span className="io-icons" aria-hidden="true">
              <FileText />
              <Code2 />
              <NotebookPen />
            </span>
            <p>
              <span>Goes in</span>Papers, code, reports, notebooks
            </p>
          </div>
          <span className="io-rule" aria-hidden="true" />
          <CortexaLogo />
          <span className="io-rule" aria-hidden="true" />
          <div>
            <ListOrdered aria-hidden="true" />
            <p>
              <span>Comes out</span>Ranked inventions with prior art
            </p>
          </div>
        </div>
        <p className="io-sources">USPTO · EPO · WIPO · arXiv · Crossref · GitHub</p>
      </PageContainer>
    </aside>
  );
}
