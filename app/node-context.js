"use strict";
// This is Node context
module.exports = function () {
    // Node contextでの相対パスの解決になる
    require("./hello/hello")();
    console.log(__dirname);
    // have not `document`
};

