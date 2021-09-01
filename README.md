> ## Testing Storybook HTML components
> - There are issues with using Parcel 2 + Storybook 6 in the same repo.
> - Therefore, this repo is now solely used to bundle static UI assets for consumption by [this separate storybook/html repo](https://github.com/basher/storybook-html).

# Using Parcel to bundle UI

## Boilerplate setup.

Using Parcel bundler (instead of Webpack or Gulp) to manage:

- ES6+ and TypeScript transpilation.
- Sass and PostCSS.

Also configured:

- Polyfills dynamically imported for older browsers.
- IE11 ponyfill for CSS variables.
- ESLint, Stylelint, Prettier.
- Git hooks.

> Notes:
> - Linter config files use recommended settings, plus some additional personal (opinionated) settings - e.g. `eslint-config-airbnb-base`.

## Start Parcel, test UI in browser, and build production assets

- `npm start` bundles static assets in `dist` folder.
- `npm run start:html` opens `index.html` in browser.
- `npm run build` creates minified static assets with map files in `dist/test-build` folder, including differential JavaScript bundling.

### Differential bundling for JavaScript
- See [this article](https://web.dev/publish-modern-javascript/) that explains how to ship modern JavaScript (ES6+) that is not transpiled to modern browsers, and transpiled ES5 to older browsers.
- This is achieved by changing Node entry point in the build step in `package.json` to be `index.html`:
```
parcel build index.html ...
```
- This HTML file contains:
```
<script defer type="module" src="./src/js/index.js"></script>
```
- This allows Parcel to build 2 JavaScript bundles, which can then be referenced in our production HTML using 2 `<script>` tags:
```
<script defer type="module" src="[modern-bundle]"></script>
<script defer nomodule src="[legacy-bundle]"></script>
```
