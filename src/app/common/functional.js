sandbox.angular.module('amb.functional', [])
.factory('$f', f);

function f() {
    return {
        memoize: memoize
    };

    function memoize(fn) {
        console.log(arguments);
        var cache = {};
        return function () {
            var key = arguments[0];
            if (!cache[key]) {
                cache[key] = fn.apply(this, arguments);
            }
            return cache[key];
        };
    }
}
