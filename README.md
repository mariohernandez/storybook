# Drupal 10 theme with Storybook support

## About this repo

* The `main` branch only includes the code for [Building a modern Drupal theme with Storybook](http://localhost:8080/blog/migrating-from-patternlab-to-storybook/).
* The `card` branch includes the code for [Integrating Drupal with Storybook components](https://mariohernandez.io/blog/integrating-drupal-with-storybook-components/).
* The `variations` branch includes the code for [Component variations](https://mariohernandez.io/blog/components-variations-in-storybook/).

This is a minimal setup of a Drupal 10 theme with Storybook support.  It uses [ViteJS](https://vitejs.dev/) as its build tool. The main objective of this project is to show how Storybook is able to render components that were written in Twig.

## Running this project

**Note**: To work with this project, you will need [NodeJS 20+](https://nodejs.org/en/download/prebuilt-installer) and [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) installed on your system.

1. Clone this repo. If you already have a working Storybook environment, copy the **components** directory (`src/components/`) into your project and you can ignore the remaining steps.
1. Run `cd storybook` (or the directory name you used when cloning the repo)
1. Run `nvm install` - You need to have nvm installed. This project uses NodeJS v20.5
1. Run `npm install` - This will install all the npm packages in `package.json`
1. Run `npm run build` - This will build static assets like CSS for the first time.
1. Run `npm run storybook` - Will build and launch Storybook in the browser.

by: [Mario Hernandez](https://mariohernandez.io)
