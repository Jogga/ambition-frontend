sandbox.angular.module('amb.functional', [])
.factory('f', f);

function f() {
    return {
        memoize: memoize,
        createMap: createMapByProperty
    };

    // builds a hash map from an array. Key is based on the given property (default = id)
    function createMapByProperty(array, property) {
        property = property || 'id';

        var hashMap = {};
        array.forEach(function (item) {
            if (item[property]) {
                hashMap[item[property]] = item;
            }
        });

        return hashMap;
    }

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
