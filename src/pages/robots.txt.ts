import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? `Sitemap: ${new URL('/sitemap-index.xml', site).href}\n` : '';
  const contents = `User-agent: *\nAllow: /\n\n${sitemap}`;

  return new Response(contents, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
