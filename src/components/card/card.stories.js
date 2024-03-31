// First we import the `html-react-parser` extension to be able to
// parse Twig code into Storybook-friendly code.
import parse from 'html-react-parser';

// Next we import the component's twig template as well as the yml file
// that contains the component's data structure.
import card from './card.twig';
import data from './card.yml';
import './card.css';

// Next we define default configuration for the component to use.
// These settings will be inherited by all stories shall the component have multiple variations.
// See an example of this in the Twig file attached to this post.
const component = {
  title: 'Components/Card',
};

// Export the Card and render it in Storybook as a Story.
export const CardStacked = {
  name: 'Card',
  render: (args) => parse(card(args)),
  args: { ...data },
};

export const CardWide = {
  name: 'Card wide',
  render: (args) => parse(card(args)),
  args: {
    ...data,
    modifier: 'card--wide',
    tags: ''
  },
};

// Finally export the default object, `component`.
// This name is optional, but Storybook requires this step.
export default component;
