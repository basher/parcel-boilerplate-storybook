# Use Parcel to bundle UI

## Boilerplate setup.

Using Parcel bundler (instead of Webpack or Gulp) to handle

* ES6+ transpilation.
* Sass.
* PostCSS.

Additionally, configured

* IE11 ponyfill for CSS variables.
* ESLint, Stylelint, Prettier.
* Git hooks.

> Notes:
> * Linter config files use recommended settings, plus some additional personal (opinionated) settings - e.g. `eslint-config-airbnb-base`.
> * This repo is setup for raw JavaScript only - i.e. not TypeScript, or React/Angular/Vue.

## Test in browser, and build

* `npm start`
* `npm build` creates minified static assets with map files in `dist` folder.

## Storybook

* `npm run storybook`
* To test [standalone Storybook preview bug](https://github.com/storybookjs/storybook/issues/10081).
* To test [Storybook V6 a11y addon bug](https://github.com/storybookjs/storybook/issues/11929).
