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
        'card': './src/components/02-molecules/card/card.css',
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
        atoms: join(__dirname, './src/components/01-atoms'),
        molecules: join(__dirname, './src/components/02-molecules'),
        // Other namespaces maybe be added.
      },
    }),
    // Allows Storybook to read data from YAML files.
    yml(),
  ],
})
