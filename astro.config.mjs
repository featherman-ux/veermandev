import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.veerman-webdevelopment.com',
  output: 'server',
  adapter: node({
    mode: 'standalone', // ← Add this line
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: true,
      fallback: 'nl',
    },
  },
});