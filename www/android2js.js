
var exec    = require('cordova/exec')
exports.jsListener = {};
exports.on = function (event, callback, scope) {
    if (typeof callback !== "function")
        return;
    if (!this.jsListener[event]) {
        this.jsListener[event] = [];
    }
    var item = [callback, scope || window];
    this.jsListener[event].push(item);
};
exports.fireEvent = function (event) {
    var args     = Array.apply(null, arguments).slice(1),
        listener = this.jsListener[event];
    if (!listener)
        return;
    for (var i = 0; i < listener.length; i++) {
        var fn    = listener[i][0],
            scope = listener[i][1];
        fn.apply(scope, args);
    }
};

