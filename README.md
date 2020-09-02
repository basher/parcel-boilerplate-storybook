# Use Parcel to bundle UI

## Boilerplate setup.

Using Parcel bundler (instead of Webpack or Gulp) to manage:

* ES6+ transpilation.
* Sass.
* PostCSS.

Also configured:

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

## Test Storybook

* This repo was initially configured as a Storybook instance, to test Storybook standalone preview (v5) and Storybook composition (v6).
* However, there are issues with using Parcel + Storybook, so now this repo is purely used to bundle static UI assets for consumption by [this storybook/html repo](https://github.com/basher/storybook-html).
