import '../scss/index.scss';
import cssVars from 'css-vars-ponyfill';
import { browserSupportsAllFeatures } from './test';

// eslint-disable-next-line no-console
console.log(`Modern browser = ${browserSupportsAllFeatures()}`);

if (!browserSupportsAllFeatures()) {
    // CSS vars ponyfill for IE11.
    cssVars();
}
