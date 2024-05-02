# Drupal 10+ theme with Storybook support

## About this repo

* The `main` branch only includes the code for [Building a modern Drupal theme with Storybook](https://mariohernandez.io/blog/building-a-modern-drupal-theme-with-storybook/).
* The `card` branch includes the code for [Integrating Drupal with Storybook components](https://mariohernandez.io/blog/integrating-drupal-with-storybook-components/).

This is a minimal setup of a Drupal 10 theme with Storybook support.  It uses [ViteJS](https://vitejs.dev/) as its build tool.
The project still lacks many of the automation found in most modern front-end projects.  The main objective of this project is to show how Storybook is able to render components that were written in Twig.

## Running this project

**Note**: You need NodeJS 18+ or 20+.

1. Clone this repo
1. Run `cd storybook` (or the directory name you used when cloning the repo)
1. Run `nvm install` - You need to have nvm installed. This project uses NodeJS v20.5
1. Run `npm install` - This will install all the npm packages in `package.json`
1. Run `npm run storybook` - Will build and launch Storybook in the browser.

by: [Mario Hernandez](https://mariohernandez.io)
