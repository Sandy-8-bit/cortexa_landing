import { chromium } from '@playwright/test';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

// Compare rendered geometry and computed appearance before/after a styling migration.
// Usage: node scripts/check-tailwind-parity.mjs baseline|compare [preview URL]
const mode = process.argv[2] ?? 'compare';
const baseURL = process.argv[3] ?? 'http://localhost:3000';
const directory = '.playwright-artifacts/tailwind-parity';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ reducedMotion: 'reduce' });
const routes = ['/', '/product', '/how-it-works', '/engines', '/evidence', '/agencies', '/pricing', '/trust', '/faq', '/contact', '/does-not-exist'];
const failures = [];
for (const route of routes) {
  await page.goto(new URL(route, baseURL).href);
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320, 390, 768, 1024, 1440, 1700]) {
    await page.setViewportSize({ width, height: 900 });
    const snapshot = await page.evaluate(() => {
      const properties = ['display', 'position', 'width', 'height', 'min-width', 'max-width', 'min-height', 'max-height', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'gap', 'grid-template-columns', 'grid-column', 'flex-direction', 'align-items', 'justify-content', 'font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'color', 'background-color', 'background-image', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-radius', 'opacity', 'visibility', 'overflow', 'transform', 'box-shadow', 'text-align', 'text-transform'];
      return [...document.querySelectorAll('body *')].filter(el => !['SCRIPT', 'STYLE', 'NEXTJS-PORTAL'].includes(el.tagName) && !el.closest('nextjs-portal')).map(el => {
        const style = getComputedStyle(el);
        return { element: `${el.tagName}.${el.getAttribute('class')?.split(' ')[0] ?? ''}`, values: Object.fromEntries(properties.map(prop => [prop, style.getPropertyValue(prop)])) };
      });
    });
    const name = `${route === '/' ? 'home' : route.slice(1)}-${width}`;
    const file = `${directory}/${name}.json`;
    if (mode === 'baseline') {
      await writeFile(file, JSON.stringify(snapshot));
      if ([390, 1440].includes(width)) await page.screenshot({ path: `${directory}/${name}-before.png`, fullPage: true });
    } else {
      const before = JSON.parse(await readFile(file, 'utf8'));
      const changes = [];
      if (before.length !== snapshot.length) changes.push({ countBefore: before.length, countAfter: snapshot.length });
      for (let i = 0; i < Math.min(before.length, snapshot.length); i++) {
        for (const [property, value] of Object.entries(before[i].values)) {
          if (value !== snapshot[i].values[property]) changes.push({ index: i, element: before[i].element, property, before: value, after: snapshot[i].values[property] });
        }
      }
      if (changes.length) failures.push({ name, changes });
      if ([390, 1440].includes(width)) await page.screenshot({ path: `${directory}/${name}-after.png`, fullPage: true });
      console.log(`${name}: ${changes.length} differences`);
    }
  }
  console.log(`${mode}: ${route}`);
}
await browser.close();
if (mode !== 'baseline') {
  await writeFile(`${directory}/differences.json`, JSON.stringify(failures, null, 2));
  console.log(`${failures.length} viewport snapshots differ; details: ${directory}/differences.json`);
  if (failures.length) process.exitCode = 1;
}
