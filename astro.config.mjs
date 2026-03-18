import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
