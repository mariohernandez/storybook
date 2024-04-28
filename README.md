# Drupal 10+ theme with Storybook support

This is a minimal setup of a Drupal 10 theme with Storybook support.  It uses [ViteJS](https://vitejs.dev/) as its build tool which offers HMR and some ESLint rules.
The project still lacks many of the automation found in most modern front-end projects.  The main objective of this project is to show how Storybook is able to render components that were written in Twig.

Read the [blog post](https://mariohernandez.io/blog/building-a-modern-drupal-theme-with-storybook/){target=_blank} where I explain how this project was put together.

## Running this project

**Note**: You need NodeJS 18 or higher.

1. Clone this repo
1. Run `cd storybook` (or the directory name you used when cloning the repo)
1. Run `nvm install` - You need to have nvm installed. This project uses NodeJS v20.5
1. Run `npm install` - This will install all the npm packages in `package.json`
1. Run `npm run build` - This will build static assets like CSS.
1. Run `npm run storybook` - Will build and launch Storybook in the browser.

You should see the Card Story.

## More info on the project

Current CSS compiling task is only intended to generate the necessary styles for the Card component. A more elaborate compiling workflow should be implemented to handle additional components.

by: [Mario Hernandez](https://mariohernandez.io)
