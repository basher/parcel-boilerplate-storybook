import '../scss/index.scss';
import cssVars from 'css-vars-ponyfill';

// CSS vars ponyfill for IE11
cssVars();

// test ES6 transpilation
const hello = 'hello';
// eslint-disable-next-line no-alert
console.log(hello);
