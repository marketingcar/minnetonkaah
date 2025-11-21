#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];

const check = (name, test) => {
  let passed = false;
  let detail = 'ok';

  try {
    passed = Boolean(test());
    if (!passed) {
      detail = 'missing or empty';
    }
  } catch (error) {
    detail = error.message;
  }

  checks.push({ name, passed, detail });
  return passed;
};

const distPath = path.join(root, 'dist');
const llmPath = path.join(root, 'public', 'llm.txt');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');

const distExists = check('dist directory exists', () => fs.existsSync(distPath));
check('dist directory has files', () => distExists && fs.readdirSync(distPath).length > 0);
check('public/llm.txt generated', () => fs.existsSync(llmPath));
check('public/sitemap.xml generated', () => fs.existsSync(sitemapPath));

const failures = checks.filter(({ passed }) => !passed);

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    passed: failures.length === 0,
    failedCount: failures.length,
    totalChecks: checks.length
  },
  checks
};

const reportPath = path.join(root, 'ops', 'llm-audit', 'report.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

if (failures.length) {
  console.error('❌ Validation failed:');
  failures.forEach(({ name, detail }) => console.error(`- ${name}: ${detail}`));
  process.exit(1);
}

console.log(`✅ Validation passed. Report written to ${reportPath}`);
