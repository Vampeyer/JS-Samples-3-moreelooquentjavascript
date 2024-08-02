/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/node-fs@0.1.7/lib/fs.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(){"use strict";var n=require("fs"),t=n.mkdir,r=n.mkdirSync,i="win32"===process.platform?"\\":"/";function o(r,e,c,u){var a=require("path").normalize(r).split(i);if(e=e||process.umask(),(u=u||0)>=a.length)return c();var f=a.slice(0,u+1).join(i)||i;n.stat(f,(function(n){null===n?o(r,e,c,u+1):t(f,e,(function(n){if(n&&"EEXIST"!=n.code)return c(n);o(r,e,c,u+1)}))}))}function e(t,o,c){var u=require("path").normalize(t).split(i);if(o=o||process.umask(),(c=c||0)>=u.length)return!0;var a=u.slice(0,c+1).join(i)||i;try{n.statSync(a),e(t,o,c+1)}catch(n){try{r(a,o),e(t,o,c+1)}catch(n){if("EEXIST"!=n.code)throw n;e(t,o,c+1)}}}n.mkdir=function(n,r,i,e){"boolean"!=typeof i&&(e=i,i=!1),"function"!=typeof e&&(e=function(){}),i?o(n,r,e):t(n,r,e)},n.mkdirSync=function(n,t,i){"boolean"!=typeof i&&(i=!1),i?e(n,t):r(n,t)},module.exports=n}();
//# sourceMappingURL=/sm/bc32ce72bec4b47f40236475dd723ff05edfd989436682e575c5f35d0e9544ec.map