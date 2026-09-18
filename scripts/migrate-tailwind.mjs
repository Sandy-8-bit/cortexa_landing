import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import ts from 'typescript';

// One-time mechanical migration. A clean pre-migration tree is required.
const backup = '.playwright-artifacts/tailwind-source';
function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? filesIn(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
const files = [...filesIn('app'), ...filesIn('components')].filter(file => file.endsWith('.tsx'));
fs.mkdirSync(backup, { recursive: true });
for (const file of ['app/globals.css', ...files]) {
  const saved = path.join(backup, file);
  if (!fs.existsSync(saved)) {
    fs.mkdirSync(path.dirname(saved), { recursive: true });
    fs.copyFileSync(file, saved);
  }
}
const original = file => fs.readFileSync(path.join(backup, file), 'utf8');
const root = postcss.parse(original('app/globals.css'));
const exact = {
  display: { block: 'block', 'inline-block': 'inline-block', flex: 'flex', 'inline-flex': 'inline-flex', grid: 'grid', none: 'hidden' },
  position: { relative: 'relative', absolute: 'absolute', fixed: 'fixed', sticky: 'sticky', static: 'static' },
  'flex-direction': { column: 'flex-col', row: 'flex-row' },
  'flex-wrap': { wrap: 'flex-wrap' },
  'align-items': { center: 'items-center', 'flex-start': 'items-start', stretch: 'items-stretch', end: 'items-end', start: 'items-start' },
  'align-self': { end: 'self-end', 'flex-start': 'self-start' },
  'justify-content': { center: 'justify-center', 'space-between': 'justify-between' },
  'align-content': { center: 'content-center' },
  'place-items': { center: 'place-items-center' },
  overflow: { hidden: 'overflow-hidden' },
  'overflow-x': { auto: 'overflow-x-auto' },
  'overflow-y': { auto: 'overflow-y-auto' },
  'font-weight': { 400: 'font-normal', 500: 'font-medium' },
  'text-transform': { uppercase: 'uppercase', none: 'normal-case' },
  'text-align': { center: 'text-center', left: 'text-left', right: 'text-right' },
  'white-space': { nowrap: 'whitespace-nowrap' },
  'text-wrap': { balance: 'text-balance' },
  'list-style': { none: 'list-none' },
  'box-sizing': { 'border-box': 'box-border' },
  isolation: { isolate: 'isolate' },
  'pointer-events': { none: 'pointer-events-none' },
  cursor: { pointer: 'cursor-pointer', 'not-allowed': 'cursor-not-allowed' },
  'vertical-align': { middle: 'align-middle' },
  visibility: { hidden: 'invisible', visible: 'visible' },
  resize: { vertical: 'resize-y' },
  'border-collapse': { collapse: 'border-collapse' },
  'flex-shrink': { 0: 'shrink-0' },
  float: { right: 'float-right' },
};
const prefixes = {
  width: 'w', height: 'h', 'min-width': 'min-w', 'max-width': 'max-w', 'min-height': 'min-h', 'max-height': 'max-h',
  top: 'top', right: 'right', bottom: 'bottom', left: 'left', inset: 'inset',
  padding: 'p', 'padding-top': 'pt', 'padding-right': 'pr', 'padding-bottom': 'pb', 'padding-left': 'pl',
  margin: 'm', 'margin-top': 'mt', 'margin-right': 'mr', 'margin-bottom': 'mb', 'margin-left': 'ml',
  'padding-inline': 'px', 'margin-inline': 'mx', 'padding-block': 'py', 'margin-block': 'my',
  gap: 'gap', 'row-gap': 'gap-y', 'column-gap': 'gap-x', 'font-size': 'text', 'line-height': 'leading', 'letter-spacing': 'tracking',
  'z-index': 'z', opacity: 'opacity', 'grid-template-columns': 'grid-cols', 'grid-template-rows': 'grid-rows',
};
function escaped(value) { return value.replace(/\s+/g, ' ').trim().replaceAll('_', '\\_').replaceAll(' ', '_'); }
function utility(prop, value) {
  if (prop === 'align-items' && ['start', 'end'].includes(value)) return `[align-items:${value}]`;
  if (exact[prop]?.[value]) return exact[prop][value];
  if (prop === 'font-family' && value === 'var(--cx-font-sans)') return 'font-sans';
  if (prop === 'letter-spacing' && value === '0') return 'tracking-[0]';
  if (prop === 'color') return value.startsWith('var(') ? `text-(${value.slice(4,-1)})` : `text-[${escaped(value)}]`;
  if (prop === 'background' && /^var\(--[\w-]+\)$/.test(value)) return `bg-(${value.slice(4,-1)})`;
  if (prop === 'background' && /^#[\da-f]+$/i.test(value)) return `bg-[${value}]`;
  if (prop === 'border-radius' && value === '0') return 'rounded-none';
  if (prop === 'border-radius' && value === '50%') return 'rounded-[50%]';
  const prefix = prefixes[prop];
  if (prefix) {
    if (/^(width|height|min-width|min-height|max-width|max-height)$/.test(prop) && value === '100%') return `${prefix}-full`;
    if (value === 'auto' && /^(width|height|margin)/.test(prop)) return `${prefix}-auto`;
    if (value === '0' && !['line-height', 'opacity', 'grid-template-columns', 'grid-template-rows'].includes(prop)) return `${prefix}-0`;
    if (prop === 'max-width' && value === 'none') return 'max-w-none';
    if (prop === 'grid-template-columns') {
      const columns = value.match(/^repeat\((\d+), minmax\(0, 1fr\)\)$/);
      if (columns) return `grid-cols-${columns[1]}`;
    }
    // Only a single value is valid for Tailwind spacing utilities.
    if (postcss.list.space(value).length === 1) return `${prefix}-[${escaped(value)}]`;
  }
  return `[${prop}:${escaped(value)}]`;
}
const complex = new Set(['animation', 'animation-delay', 'transition', 'transform', 'transform-origin', 'box-shadow', 'background-image', 'background-size', 'mask-image']);
const mappings = new Map();
let sequence = 0;
// Shared primitive overrides cross component boundaries; keep their exact cascade.
const retained = new Set(['section', 'first-section', 'research-section', 'transformation-section', 'final-cta', 'panel', 'alternate']);
for (const rule of [...root.nodes]) {
  if (rule.type !== 'rule') continue;
  const names = rule.selectors.map(selector => /^\.([\w-]+)$/.exec(selector)?.[1]);
  if (names.some(name => !name || retained.has(name) || /^node-/.test(name))) continue;
  if (rule.nodes.some(node => node.type === 'decl' && node.prop.startsWith('--'))) continue;
  for (const declaration of [...rule.nodes]) {
    if (declaration.type !== 'decl' || complex.has(declaration.prop) || declaration.value.includes('gradient(') || (names.includes('pricing-card') && declaration.prop === 'border-right')) continue;
    for (const name of names) {
      if (!mappings.has(name)) mappings.set(name, []);
      mappings.get(name).push({ prop: declaration.prop, value: declaration.value, order: sequence++ });
    }
    declaration.remove();
  }
  if (!rule.nodes.some(node => node.type !== 'comment')) rule.remove();
}
function expand(text) {
  const classes = text.trim().split(/\s+/).filter(Boolean);
  const entries = classes.flatMap(name => mappings.get(name) ?? []).sort((a,b) => a.order-b.order);
  const final = new Map(entries.map(entry => [entry.prop, entry.value]));
  const utilities = [...final].map(([prop, value]) => utility(prop, value));
  // Retain semantic hooks used by animations, tests and contextual selectors.
  const hooks = classes.map(name => name === 'container' ? 'page-container' : name);
  return [...new Set([...hooks, ...utilities])].join(' ');
}
for (const file of files) {
  const source = original(file);
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const replacements = [];
  function visit(node, inClass = false) {
    if (ts.isJsxAttribute(node)) {
      if (node.name.getText(ast) === 'className' && node.initializer) visit(node.initializer, true);
      return;
    }
    if (inClass && ts.isStringLiteral(node)) {
      const result = expand(node.text);
      if (result !== node.text) replacements.push({ start: node.getStart(ast), end: node.end, text: JSON.stringify(result) });
      return;
    }
    if (inClass && ts.isTemplateExpression(node)) {
      for (const literal of [node.head, ...node.templateSpans.map(span => span.literal)]) {
        const start = literal.getStart(ast)+1;
        const end = literal.end-(literal.kind === ts.SyntaxKind.TemplateTail ? 1 : 2);
        const text = source.slice(start, end);
        // Do not interpret a dynamically constructed suffix as a complete class.
        const space = text.match(/^(\s*)(.*?)(\s*)$/s);
        const partial = literal.kind !== ts.SyntaxKind.TemplateTail && !space[3] ? /(?:^|\s)(\S+)$/.exec(space[2]) : null;
        const expanded = partial
          ? `${expand(space[2].slice(0, partial.index))} ${partial[1]}`.trimStart()
          : expand(space[2]);
        if (expanded !== space[2]) replacements.push({ start, end, text: space[1]+expanded+space[3] });
      }
      for (const span of node.templateSpans) visit(span.expression, true);
      return;
    }
    ts.forEachChild(node, child => visit(child, inClass));
  }
  visit(ast);
  let output = source;
  for (const edit of replacements.sort((a,b) => b.start-a.start)) output = output.slice(0,edit.start)+edit.text+output.slice(edit.end);
  if (output !== source) fs.writeFileSync(file, output);
}
// Global type defaults belong below utilities; contextual selectors retain their
// original specificity/order to preserve the editorial layouts at every width.
const base = postcss.atRule({ name: 'layer', params: 'base' });
for (const node of [...root.nodes]) {
  if (node.type === 'rule' && node.source.start.line < 162 && node.selector !== ':root') {
    node.remove();
    base.append(node);
  }
}
root.nodes.find(node => node.type === 'atrule' && node.name === 'theme').after(base);
const panel = root.nodes.find(node => node.type === 'rule' && node.selector === '.panel');
panel.remove();
base.append(panel);
let applied = 0;
root.walkRules(rule => {
  rule.selector = rule.selector.replace(/\.container\b/g, '.page-container');
  if (rule.selector === ':root' || rule.parent?.name === 'theme' || rule.parent?.name?.includes('keyframes')) return;
  // @apply keeps contextual and responsive rules readable without duplicating
  // component markup. Custom CSS is reserved for tokens, transitions and effects.
  for (const declaration of [...rule.nodes]) {
    if (declaration.type !== 'decl' || declaration.prop.startsWith('--') || complex.has(declaration.prop) || declaration.value.includes('gradient(') || declaration.important) continue;
    declaration.replaceWith(postcss.atRule({ name: 'apply', params: utility(declaration.prop, declaration.value) }));
    applied++;
  }
  // Combine adjacent utility applications while preserving shorthand order.
  for (const node of [...rule.nodes]) {
    if (node.type === 'atrule' && node.name === 'apply' && node.prev()?.type === 'atrule' && node.prev().name === 'apply' && !node.params.includes('[border') && !node.prev().params.includes('[border')) {
      node.prev().params += ` ${node.params}`;
      node.remove();
    }
  }
});
root.prepend(postcss.comment({ text: 'Component utilities live in TSX. Contextual/responsive @apply rules preserve the original cascade. Native CSS is retained for theme tokens and complex motion/visual effects.' }));
root.append(postcss.parse('p.sr-only { @apply m-0; }'));
fs.writeFileSync('app/globals.css', root.toString());
console.log(`Migrated ${mappings.size} base classes into TSX; converted ${applied} contextual declarations to Tailwind utilities.`);
