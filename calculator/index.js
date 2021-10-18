/*!
 * MIT
 */
!function(o,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(o="undefined"!=typeof globalThis?globalThis:o||self).calculator=r()}(this,(function(){"use strict";function o(o,r){const{a:t,b:n}=o;if(!o)throw Error(`${r} Error ! No operand object provided`);if(!t)throw Error(`${r} Error ! No operand A provided`);if(!n)throw Error(`${r} Error ! No operand B provided`)}return{add:function(r){const{a:t,b:n}=r;return o(r,"add"),t+n},divide:function(r){const{a:t,b:n}=r;return o(r,"divide"),t/n},multiply:function(r){const{a:t,b:n}=r;return o(r,"multiply"),t*n},substract:function(r){const{a:t,b:n}=r;return o(r,"subtract"),t-n}}}));
//# sourceMappingURL=index.js.map
