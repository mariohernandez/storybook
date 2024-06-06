# Storybook and ViteJS

This is a bare bones Drupal 10 theme which can be used as a starting point for your Drupal project.

This theme is the result of the tutorial [Automating your Drupal Front-end with ViteJS](https://mariohernandez.io/blog/automating-your-drupal-front-end-with-vitejs/).
It includes the following features:

## Tooling

1. Storybook 8
1. ViteJS
1. Node 20+
1. TwigJS
1. Automation for the following tasks:
    * Compiling, minifying, and copying CSS and JavaScript
    * Copying images to **dist**
    * Linting CSS & JS
    * Watch task

## Running and building the project

To run and build the project you need:

1. Node version 20+
1. NVM installed in your machine.

### Common commands

* `nvm install`: A one time command to set the right node version.
* `npm install`: Will install all node packages defined in `package.json`.
* `npm run build`: Build the entire project by running all available tasks.
* `npm run storybook`: This is the watch task which will build the project and will keep Storybook running and listening for code changes.

#### Note:

If you switch to another project with a different node version,
when you switch back to this project, run: **`nvm use`**
This will set the node version back to this project's version.
