#!/usr/bin/env node
/**
 * screenshot-all.mjs
 * Takes PNG screenshots of all skeletons using Playwright.
 * Run: npm run screenshot
 */

import { chromium } from 'playwright';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const manifest = JSON.parse(readFileSync(join(ROOT, 'skeletons-manifest.json'), 'utf-8'));

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const WIDTH = 1440;
const HEIGHT = 900;

async function main() {
  console.log(`Taking screenshots of ${manifest.length} skeletons...`);
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Viewport: ${WIDTH}x${HEIGHT}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
  });

  let success = 0;
  let failed = 0;

  for (const s of manifest) {
    const page = await context.newPage();
    const url = `${BASE_URL}/templates/${s.slug}/index.html`;
    const outPath = join(ROOT, 'templates', s.slug, 'screenshot.png');

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(500); // Let animations settle
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  ✓ ${s.slug}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${s.slug}: ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`\nDone: ${success} screenshots taken, ${failed} failed.`);
}

main().catch(console.error);
