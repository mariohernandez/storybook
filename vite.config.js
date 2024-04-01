/* eslint no-undef: "off" */
import yml from '@modyfi/vite-plugin-yaml';
import { defineConfig } from "vite"
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
export default defineConfig({
  plugins: [
    // Twig namespaces for including components in twig.
    twig({
      namespaces: {
        components: join(__dirname, './src/components'),
      },
    }),
    // YML for including data from yml to twig.
    yml(),
  ],
})
