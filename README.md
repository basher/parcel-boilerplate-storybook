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

* `npm start` bundles static assets.
* `npm run start:html` opens `index.html` in browser.
* `npm run build` creates minified static assets with map files in `dist` folder.

## Test Storybook - NOW OBSOLETE (TBC)?

* `npm run storybook`, which does NOT open the Storybook UI in the browser.
* You need to also run storybook from the [Storybook preview wrapper repo](https://github.com/basher/parcel-boilerplate-storybook-preview) - see the `README` for instructions.

### Open Storybook issues & discussions - NOW OBSOLETE (TBC)?
* Ref: [validateDOMNesting bug](https://github.com/storybookjs/storybook/issues/12139).
* Ref: [Storybook composition discussion](https://github.com/storybookjs/storybook/discussions/12103).
