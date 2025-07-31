// @ts-check
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zettalyst.github.io',
  integrations: [mdx()],
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'file',
  },
});
