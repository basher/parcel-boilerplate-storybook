import '../scss/index.scss';
import { browserSupportsAllFeatures } from './test';

/* eslint-disable no-console */
console.log(`Modern browser = ${browserSupportsAllFeatures()}`);

if (!browserSupportsAllFeatures()) {
    // Require 'promise' for Parcel, then dynamic import polyfills, then instantiate UI modules.
    require('core-js/es/promise');
    import('./polyfills')
        .then(() => console.log('Polyfills loaded'))
        .catch(e => console.error(e));
}
