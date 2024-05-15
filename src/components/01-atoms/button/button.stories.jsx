/**
 * First we import the `html-react-parser` extension to be able to
 * parse HTML into react.
 */
import parse from 'html-react-parser';

/**
 * Next we import the component's markup and logic (twig), data schema (yml),
 * as well as any styles or JS the component may use.
 */
import title from './button.twig';
import data from './button.yml';
import './button.css';

/**
 * Next we define a default configuration for the component to use.
 * These settings will be inherited by all stories of the component,
 * shall the component have multiple variations.
 * `component` is an arbitrary name assigned to the default configuration.
 * `title` determines the location and name of the story in Storybook's sidebar.
 * `render` uses the parser extension to render the component's html to react.
 * `args` uses the variables defined in title.yml as react arguments.
 */
const component = {
  title: 'Atoms/Button',
};

/**
 * Export the Title and render it in Storybook as a Story.
 * The `name` key allows you to assign a name to each story of the component.
 * For example: `Title`, `Title dark`, `Title light`, etc.
 */
export const ButtonElement = {
  name: 'button',
  render: (args) => parse(title(args)),
  args: { ...data },
};

/**
 * Finally export the default object, `component`. Storybook/React requires this step.
 */
export default component;
