import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://tmvland.github.io',
  vite: {
    plugins: [yaml()]
  },
  integrations: [mdx()]
});