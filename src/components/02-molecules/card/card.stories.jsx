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

export default component;
