import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zettalyst.github.io',
  vite: {
    // @ts-expect-error - @tailwindcss/vite uses different Vite types than Astro's bundled version
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      filenameBase: 'astronomy-sitemap',
    }),
  ],
});
