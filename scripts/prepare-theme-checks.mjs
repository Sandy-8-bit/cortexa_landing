import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const tests = 'tests/site.spec.ts';
let source = readFileSync(tests, 'utf8');
source = source.replace("await expect(page.locator('link[rel=\"canonical\"]')).toHaveAttribute('href', `https://cortexa.co${route === '/' ? '/' : route}`);", "const canonical = await page.locator('link[rel=\"canonical\"]').getAttribute('href');\n    expect(new URL(canonical!).href).toBe(new URL(route, 'https://cortexa.co').href);");
source = source.replaceAll('test-results/screenshots/', '.playwright-artifacts/screenshots/');
writeFileSync(tests, source);
const config = 'playwright.config.ts';
let configSource = readFileSync(config, 'utf8');
if (!configSource.includes('outputDir:')) configSource = configSource.replace("testDir: './tests',", "testDir: './tests',\n  outputDir: '.playwright-artifacts',");
writeFileSync(config, configSource);
let ignore = readFileSync('.gitignore','utf8');
if (!ignore.includes('/.playwright-artifacts/')) ignore += '\n/.playwright-artifacts/\n/playwright-report/\n/test-results/screenshots/\n';
writeFileSync('.gitignore',ignore);
// Preserve a pre-existing tracked diagnostic file that the default Playwright output cleanup removed.
const tracked = execFileSync('git',['show','HEAD:test-results/generated.css']);
mkdirSync('test-results',{recursive:true});
writeFileSync('test-results/generated.css',tracked);
