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

/**
 * Next we define a default component object for the component to use.
 * These settings will be inherited by all stories of the component,
 * shall the component have multiple variations.
 * `component` is an arbitrary name assigned to the default object..
 * `title` determines the location and name of the story in Storybook's sidebar.
 * `render` uses the parser extension to render the component's html to react.
 * `args` uses the variables defined in button.yml as react arguments.
 */
const component = {
  title: 'Atoms/Button',
  render: (args) => parse(title(args)),
};

/**
 * Export the Button and render it in Storybook as a Story.
 * The `name` key allows you to assign a name to each story of the component.
 * For example: `Button`, `Button light`, `Button outlined`, etc.
 * `args` are the variable and properties such as button.modifier, button. text, etc.
 */
export const ButtonElement = {
  name: 'button',
  args: { ...data },
};

/**
 * Finally export the default object, `component`. Storybook/React requires this step.
 */
export default component;
