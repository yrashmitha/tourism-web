import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.PUBLIC_SITE_URL
  ?? process.env.VERCEL_PROJECT_PRODUCTION_URL
  ?? process.env.VERCEL_URL;
const siteUrl = configuredSite
  ? (configuredSite.startsWith('http') ? configuredSite : `https://${configuredSite}`)
  : undefined;

export default defineConfig({
  ...(siteUrl ? { site: siteUrl } : {}),
  output: 'static',
  integrations: siteUrl ? [sitemap()] : [],
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
});
