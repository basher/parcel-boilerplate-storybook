import '../scss/index.scss';
import { browserSupportsAllFeatures } from './test';
import domready from 'domready';

/* eslint-disable no-console */
console.log(`Modern browser = ${browserSupportsAllFeatures()}`);

// Run UI module instantiation when DOM is ready.
domready(function () {
    if (browserSupportsAllFeatures()) {
        console.log('Instantiate UI modules...');
    } else {
        // Require 'promise' for Parcel, then dynamic import polyfills, then instantiate UI modules.
        require('core-js/es/promise');
        import('./polyfills')
            .then(() =>
                console.log('Polyfills loaded... instantiate UI modules...')
            )
            .catch((e) => console.error(e));
    }
});
