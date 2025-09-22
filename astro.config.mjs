// astro.config.ts - This should already be correct
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://www.veermandev.nl',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: [],
    remotePatterns: [],
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: true,
      fallback: 'nl',
    },
  },
});