/** @type { import('@storybook/react').Preview } */
import Twig from 'twig';
import drupalFilters from 'twig-drupal-filters';
import '../src/css/reset.css';
import '../src/css/base.css';
import '../src/css/utilities.css';
import '../src/components/01-atoms/button/button.css';
import '../src/components/01-atoms/title/title.css';
import '../src/components/02-molecules/card/card.css';

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
