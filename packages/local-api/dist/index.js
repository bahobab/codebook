"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
var serve = function (port, filename, dir) {
    console.log("Serving traffic on port " + port);
    console.log("Saving/fetching file " + filename);
    console.log("That file is on dir: " + dir);
};
exports.serve = serve;
