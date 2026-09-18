import { test, expect } from '@playwright/test';
import { routes } from '../data/navigation';

test('every route renders correctly at every required breakpoint', async ({ page }) => {
  test.setTimeout(240_000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('h1'), route).toHaveCount(1);
    await expect(page.locator('h1'), route).toBeVisible();
    await expect(page).toHaveTitle(/Cortexa/);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(new URL(canonical!).href).toBe(new URL(route, 'https://cortexa.co').href);
    for (const width of [320, 375, 390, 430, 640, 768, 900, 1024, 1280, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const sizes = await page.evaluate(() => ({ viewport: window.innerWidth, scroll: document.documentElement.scrollWidth }));
      expect(sizes.scroll, `${route} overflows at ${width}px`).toBeLessThanOrEqual(sizes.viewport);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.screenshot({ path: `.playwright-artifacts/screenshots/${route === '/' ? 'home' : route.slice(1)}-desktop.png`, fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: `.playwright-artifacts/screenshots/${route === '/' ? 'home' : route.slice(1)}-mobile.png`, fullPage: true });
  }
  expect(errors).toEqual([]);
});

test('mobile menu supports keyboard dismissal and closes on navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'MENU' });
  await toggle.click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Pricing' }).click();
  await expect(page).toHaveURL(/\/pricing$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('opportunity and agency filters return the correct records', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.candidate-card')).toHaveCount(12);
  await page.getByRole('button', { name: 'High potential 4' }).click();
  await expect(page.locator('.candidate-card')).toHaveCount(4);
  await page.getByRole('button', { name: 'Emerging 5' }).click();
  await expect(page.locator('.candidate-card')).toHaveCount(5);
  await page.getByRole('button', { name: 'Adjacent 3' }).click();
  await expect(page.locator('.candidate-card')).toHaveCount(3);
  await page.goto('/agencies');
  await expect(page.locator('tbody tr')).toHaveCount(8);
  await page.getByRole('button', { name: 'Awaiting your review' }).click();
  await expect(page.locator('tbody tr')).toHaveCount(4);
  await expect(page.locator('tbody')).not.toContainText('With client');
  await page.getByRole('button', { name: 'With client' }).click();
  await expect(page.locator('tbody tr')).toHaveCount(4);
  await expect(page.locator('tbody')).not.toContainText('Awaiting agent review');
});

test('product walkthrough works from upload to export and restarts cleanly', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/product');
  const next = page.getByRole('button', { name: 'Next step' });
  await expect(page.getByRole('button', { name: 'Back', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: /DROP FILES OR CLICK TO SIMULATE/ }).click();
  await expect(page.locator('.uploaded-files > div')).toHaveCount(5);
  await next.click();
  await expect(page.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  await next.click();
  await expect(page.locator('.candidate-card')).toHaveCount(4);
  await next.click();
  await expect(page.locator('.demo-evidence-grid > article')).toHaveCount(3);
  await next.click();
  await expect(page.locator('.radar')).toBeVisible();
  await next.click();
  await page.getByRole('button', { name: 'Seed', exact: true }).click();
  await expect(page.locator('.lattice')).toBeVisible();
  await page.getByRole('button', { name: 'Harvest', exact: true }).click();
  await expect(page.locator('.candidate-card')).toHaveCount(4);
  await next.click();
  await expect(page.locator('.candidate-card')).toHaveCount(12);
  await next.click();
  await expect(next).toBeDisabled();
  await page.getByRole('button', { name: /PDF brief/ }).click();
  await expect(page.getByRole('status')).toContainText('Demo: Generated Patent brief.pdf');
  await page.getByRole('button', { name: 'Dismiss notification' }).click();
  await page.getByRole('button', { name: 'Back', exact: true }).click();
  await expect(page.locator('.candidate-card')).toHaveCount(12);
  await page.getByRole('button', { name: 'Restart' }).click();
  await expect(page.locator('.uploaded-files')).toHaveCount(0);
  await expect(page.getByRole('button', { name: /DROP FILES OR CLICK TO SIMULATE/ })).toBeVisible();
});

test('evidence nodes, accordion, and form validation are accessible and functional', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/evidence');
  await page.getByRole('button', { name: /Patent match/ }).click();
  await expect(page.locator('#evidence-record')).toContainText('Claim 1');
  await page.getByRole('button', { name: /Publication/ }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#evidence-record')).toContainText('Fig. 3');
  await page.getByRole('button', { name: /Code repository/ }).click();
  await expect(page.locator('#evidence-record')).toContainText('ramp.py');
  await page.getByRole('button', { name: /Market signal/ }).click();
  await expect(page.locator('#evidence-record')).toContainText('Assignees');
  await page.goto('/faq');
  const first = page.getByRole('button', { name: /Does Cortexa file patents/ });
  const second = page.getByRole('button', { name: /How is this different/ });
  await expect(first).toHaveAttribute('aria-expanded', 'true');
  await second.click();
  await expect(first).toHaveAttribute('aria-expanded', 'false');
  await expect(second).toHaveAttribute('aria-expanded', 'true');
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Request a run' }).click();
  await expect(page.getByLabel('Name', { exact: false })).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('#name')).toBeFocused();
  await page.getByLabel('Name', { exact: false }).fill('Test Researcher');
  await page.getByLabel('Work email').fill('invalid');
  await page.getByRole('button', { name: 'Request a run' }).click();
  await expect(page.locator('#email-error')).toBeVisible();
  await page.getByLabel('Work email').fill('researcher@example.com');
  await page.getByRole('button', { name: 'Request a run' }).click();
  await expect(page.getByRole('status')).toContainText('Nothing was sent');
  await expect(page.locator('#name')).toHaveValue('');
});

test('links, metadata endpoints, and not-found page resolve', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a[href]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute('href')!))]);
  for (const href of hrefs.filter(href => href.startsWith('/'))) expect((await request.get(href)).status(), href).toBe(200);
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).toContain('https://cortexa.co');
  expect((await sitemap.text()).match(/<url>/g)).toHaveLength(10);
  expect(await (await request.get('/robots.txt')).text()).toContain('Allow: /');
  expect((await request.get('/opengraph-image')).status()).toBe(200);
  expect((await page.goto('/does-not-exist'))?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'A different direction.' })).toBeVisible();
});

test('normal-motion content stays visible and route transitions do not throw', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('.hero-line').last()).toBeVisible();
  await page.getByRole('link', { name: 'Explore Cortexa' }).click();
  await expect(page).toHaveURL(/\/product$/);
  await expect(page.locator('h1')).toHaveCSS('opacity', '1');
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Evidence', exact: true }).click();
  await expect(page.locator('.graph-network')).toBeVisible();
  expect(errors).toEqual([]);
});
