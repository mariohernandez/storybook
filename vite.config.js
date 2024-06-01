/* eslint-disable */

import { defineConfig } from 'vite'
import path from 'path';
import { glob } from 'glob';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      eslint: {
        lintCommand: 'eslint "./src/components/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./src/**/*.css"',
      },
    }),
    viteStaticCopy({
      targets: [
      {
        src: './src/components/**/*.{png,jpg,jpeg,svg,webp,mp4}',
        dest: 'images',
      }],
    }),
    twig({
      namespaces: {
        atoms: join(__dirname, './src/components/01-atoms'),
        molecules: join(__dirname, './src/components/02-molecules'),
        organisms: join(__dirname, './src/components/03-organisms'),
        layouts: join(__dirname, './src/components/04-layouts'),
        pages: join(__dirname, './src/components/05-pages'),
      },
    }),
    yml(),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname,'./src/**/*.{css,js}')),
      output: {
        assetFileNames: 'css/[name].css',
        entryFileNames: 'js/[name].js',
      },
    },
  },
})
