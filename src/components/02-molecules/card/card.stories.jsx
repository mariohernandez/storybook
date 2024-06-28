import parse from 'html-react-parser';

import card from './card.twig';
import data from './card.yml';
import dataHorizontal from './card-horizontal.yml';

// If this component used JavaScript (card.js), we could import it as follows:
// import './card'; // no extension needed.

const component = {
  title: 'Molecules/Card',
};

export const Card = {
  name: 'Card stacked',
  render: (args) => parse(card(args)),
  args: { ...data },
};

export const CardLightCta = {
  ...Card,
  name: 'Card light CTA',
  render: (args) => parse(card(args)),
  args: {
    ...data,
    cta: {
      modifier: 'button--light',
      text: 'Try it now',
      url: 'https://mariohernandez.io',
    }
  },
};

export const CardSmall = {
  ...Card,
  name: 'Card small',
  render: (args) => parse(card(args)),
  args: {
    ...data,
    modifier: 'card--small',
    cta: '',
  },
};

export const CardNoImage = {
  ...Card,
  name: 'Card no image',
  render: (args) => parse(card(args)),
  args: {
    ...data,
    modifier: 'card--no-image',
    image: '',
  },
};

export const CardHorizontal = {
  ...Card,
  name: 'Card horizontal',
  render: (args) => parse(card(args)),
  args: {
    ...dataHorizontal,
  },
};

export default component;
