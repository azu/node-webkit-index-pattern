"use strict";
// This is Node context
module.exports = function () {
    // Node contextでの相対パスの解決になる
    // relative path from this module
    require("./hello/hello")();
    console.log(__dirname);// Additionally, have not `document`
};

