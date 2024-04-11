# Drupal 10+ theme with Storybook support

This is a minimal setup of a Drupal 10 theme with Storybook support.  It uses [ViteJS](https://vitejs.dev/) as its build tool which offers HMR and some ESLint rules.
The project still lacks many of the automation found in most modern front-end projects.  The main objective of this project is to show how Storybook is able to render components that were written in Twig.

## Running this project

**Note**: You need NodeJS 18 or higher.

1. Clone this repo
1. Run `cd storybook` (or the directory name you used when cloning the repo)
1. Run `nvm install` - You need to have nvm installed. This project uses NodeJS v20.5
1. Run `npm install` - This will install all the npm packages in `package.json`
1. Run `npm run storybook` - Will build and launch Storybook in the browser.

You should see the Title Story.  If you change the values in the Controls, you will be able to alter the title's behavior.  Try it.

## More info on the project

- `.nvmrc` in the root of this project defines the version of NodeJS this project uses.
- `index.html` in the root of the project was added by ViteJS.  You can ignore it and even delete it.
- `storybook.info` and `storybook.libraries.yml` are only for demo purposes.

by: [Mario Hernandez](https://mariohernandez.io)
