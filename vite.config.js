/* eslint-disable */

import { defineConfig } from 'vite'
import yml from '@modyfi/vite-plugin-yaml';
import twig from 'vite-plugin-twig-drupal';
import { join } from 'node:path'
export default defineConfig({
  root: 'src',
  publicDir: 'public',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    rollupOptions: {
      input: {
        'reset': './src/css/reset.css',
        'styles': './src/css/styles.css',
        'card': './src/components/card/card.css',
      },
      output: {
        assetFileNames: 'css/[name].css',
      },
    },
    sourcemap: true,
  },
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, './src/components'),
        // Other namespaces maybe be added.
      },
    }),
    // Allows Storybook to read data from YAML files.
    yml(),
  ],
})
