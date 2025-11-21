
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://minnetonkaanimal.com';

const routes = [
  { path: '/', name: 'Home', description: 'Main landing page with overview of services and philosophy' },
  { path: '/about', name: 'About Us', description: 'History, mission, and hospital information' },
  { path: '/services', name: 'Services', description: 'Comprehensive veterinary services list' },
  { path: '/services/integrative-medicine', name: 'Integrative Medicine', description: 'Acupuncture, laser therapy, and holistic treatments' },
  { path: '/about/meet-the-team', name: 'Our Team', description: 'Profiles of veterinarians and staff' },
  { path: '/new-clients', name: 'New Clients', description: 'Information for new patients and forms' },
  { path: '/about/pet-resources', name: 'Pet Resources', description: 'Educational materials and helpful links' },
  { path: '/contact', name: 'Contact', description: 'Location, hours, and contact form' }
];

const generateFiles = () => {
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // --- Generate llm.txt ---
  const llmContent = `Minnetonka Animal Hospital - Site Documentation
Generated: ${new Date().toISOString()}
URL: ${DOMAIN}

## Site Overview
Minnetonka Animal Hospital provides personalized, compassionate veterinary care. 
The website is a single-page application (SPA) built with React, Vite, and TailwindCSS.

## Contact Information
- Address: 17408 Minnetonka Blvd, Minnetonka, MN 55345
- Phone: 952.473.1239
- Email: info@minnetonkaanimal.com
- Hours: Mon-Fri 8am-5pm, Sat-Sun Closed

## Site Structure & Routes
${routes.map(r => `- Route: ${r.path}\n  Name: ${r.name}\n  Description: ${r.description}`).join('\n\n')}

## Technical Stack
- Framework: React 18
- Build Tool: Vite
- Styling: TailwindCSS + shadcn/ui
- Routing: React Router 6
`;

  fs.writeFileSync(path.join(publicDir, 'llm.txt'), llmContent);
  console.log('✅ public/llm.txt generated successfully');

  // --- Generate sitemap.xml (Preserving/Restoring Sitemap functionality) ---
  const currentDate = new Date().toISOString().split('T')[0];
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log('✅ public/sitemap.xml generated successfully');
};

generateFiles();
