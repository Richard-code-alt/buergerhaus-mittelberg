// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.buergerhaus-mittelberg.de',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/datenschutz') && !page.includes('/impressum'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
