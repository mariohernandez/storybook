import parse from 'html-react-parser';

import title from './title.twig';
import data from './title.yml';

const component = {
  title: 'Components/Title',
};

export const TitleElement = {
  name: 'Title',
  render: (args) => parse(title(args)),
  args: { ...data },
};

export default component;
