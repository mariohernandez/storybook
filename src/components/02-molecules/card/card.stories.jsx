import parse from 'html-react-parser';

import card from './card.twig';
import data from './card.yml';
import dataHorizontal from './card-horizontal.yml';
import './card.css';

const component = {
  title: 'Molecules/Card',
  render: (args) => parse(card(args)),
};

export const Card = {
  name: 'Card stacked',
  args: { ...data },
};

export const CardLightCta = {
  ...Card,
  name: 'Card light CTA',
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
  args: {
    ...data,
    modifier: 'card--small',
    cta: '',
  },
};

export const CardNoImage = {
  ...Card,
  name: 'Card no image',
  args: {
    ...data,
    modifier: 'card--no-image',
    image: '',
  },
};

export const CardHorizontal = {
  ...Card,
  name: 'Card horizontal',
  args: {
    ...dataHorizontal,
  },
};

export default component;
