import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://azimbayov.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
