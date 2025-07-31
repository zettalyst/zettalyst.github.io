// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zettalyst.github.io',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        // Remove trailing slash from URLs in sitemap
        item.url = item.url.replace(/\/$/, '');
        return item;
      },
    }),
  ],
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },
});
