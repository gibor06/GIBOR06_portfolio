import type { APIRoute } from 'astro';

const SITE = 'https://gibor06.github.io/GIBOR06_portfolio';

const ROUTES = [
  '/',
  '/vi/',
  '/work/',
  '/vi/work/',
  '/research/',
  '/vi/research/',
  '/about/',
  '/vi/about/',
  '/resume/',
  '/vi/resume/',
  '/credentials/',
  '/vi/credentials/',
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = ROUTES.map(
    (path) => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' || path === '/vi/' ? '1.0' : '0.8'}</priority>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
