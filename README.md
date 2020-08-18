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
* `npm run build` creates minified static assets with map files in `dist` folder.

## Test Storybook

* `npm run storybook`, which does NOT open the Storybook UI in the browser.
* You need to also `npm run storybook:preview` from the [Storybook preview wrapper repo](https://github.com/basher/parcel-boilerplate-storybook-preview).

### Storybook issues
* Ref: [standalone Storybook preview bug](https://github.com/storybookjs/storybook/issues/10081).
* Ref: [Storybook V6 a11y addon bug](https://github.com/storybookjs/storybook/issues/11929).
* Ref: [Storybook V6 composition bug](https://github.com/storybookjs/storybook/issues/11892).
