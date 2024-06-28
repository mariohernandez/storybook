import parse from 'html-react-parser';

import button from './button.twig';
import data from './button.yml';

const settings = {
  title: 'Atoms/Button',
};

// Default button story.
export const Button = {
  render: (args) => parse(button(args)),
  args: { ...data },
};

// Outlined button.
export const Outlined = {
  ...Button,
  name: 'Outlined button',
  args: {
    ...Button.args,
    modifier: 'button--outlined',
  },
};

export default settings;
