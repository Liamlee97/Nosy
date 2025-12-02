
import fs from 'fs';
import path from 'path';
import { articlesData } from '../src/data/articles/index';
import { conditionsData } from '../src/data/conditions';

const BASE_URL = 'http://localhost:5173'; // Update this to production URL when deploying

const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/science101',
    '/articles',
    '/conditions',
    '/community',
];

function generateSitemap() {
    const articleRoutes = Object.values(articlesData).map((article) => `/article/${article.id}`);
    const conditionRoutes = Object.values(conditionsData).map((condition) => `/condition/${condition.id}`);

    const allRoutes = [...staticRoutes, ...articleRoutes, ...conditionRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
            .map((route) => {
                return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
}

generateSitemap();
