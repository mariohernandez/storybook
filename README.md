# Drupal 10+ theme with Storybook support

This template provides a minimal setup to get React working in [Vite](https://vitejs.dev/) with HMR and some ESLint rules.
In addition, it integrates Storybook 8+ as a way to create components with Twig and YML and render them in Storybook as React stories.

The project still lacks many of the automation found in most modern front-end projects.  The main objective of this project is to show how Storybook is able to render components that were written in Twig.  CSS and JS compiling is not currently in place.

## Running this project

1. Clone this repo
1. Run `cd storybook` (or the directory name you used when cloning the repo)
1. Run `nvm install` - You need to have nvm installed in your computer.
1. Run `npm install` - This will install all the npm packages in `package.json`
1. Run `npm run storybook` - Will build and launch Storybook in the browser.

## More info on the project

- `index.html` in the root of the project is used by Vite but it is not required if you are planning to use this as a Drupal theme.
- `.nvmrc` in the root of this project defines the version of NodeJS this project uses.

by: [Mario Hernandez](https://mariohernandez.io)
