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
    domains: ['veermandev.nl', 'www.veermandev.nl'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.veermandev.nl',
      },
    ],
    // Enable image optimization for better performance
    formats: ['avif', 'webp', 'jpeg'],
    quality: 80,
    // Define responsive image sizes
    sizes: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
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