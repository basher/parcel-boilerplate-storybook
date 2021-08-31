import '../scss/index.scss';
import cssVars from 'css-vars-ponyfill';
import { browserSupportsAllFeatures } from './test';

// CSS vars ponyfill for IE11.
cssVars();

// Test ES6 and TypeScript transpilation.
// eslint-disable-next-line no-console
console.log(`Modern browser = ${browserSupportsAllFeatures()}`);
