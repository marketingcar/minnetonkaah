
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define your domain here
const DOMAIN = 'https://minnetonkaanimal.com';

// Define all your routes here manually since we can't easily crawl a SPA at build time without complex tooling
const routes = [
  '/',
  '/about',
  '/services',
  '/services/integrative-medicine',
  '/about/meet-the-team',
  '/new-clients',
  '/about/pet-resources',
  '/contact'
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  // Ensure public directory exists (though it usually does in Vite projects)
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated successfully in /public directory');
};

generateSitemap();
