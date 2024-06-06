/** @type { import('@storybook/react').Preview } */
import Twig from 'twig';
import drupalFilters from 'twig-drupal-filters';
import '../src/styles.css'; /* Contains reset, base, and utilities styles. */
import '../src/components/components.css'; /* Contains all components CSS. */

// If JS was needed, this is how it can be imported on a Component.
// import '../src/components/02-molecules/card/card';

function setupFilters(twig) {
  twig.cache();
  drupalFilters(twig);
  return twig;
}

setupFilters(Twig);

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
