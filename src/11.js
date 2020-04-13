"use strict";
function swap(a, b) {
}
var x;
(function (x) {
    var log;
    function log1(a) {
        console.log(a);
    }
    log: log1;
    console.log(log);
})(x || (x = {}));
