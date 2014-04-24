"use strict";
// This is chrome context
console.log(typeof __dirname);// => undefined - Chrome contextなので

require("./app/node-context")();// path from html...

