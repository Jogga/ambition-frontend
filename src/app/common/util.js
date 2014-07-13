(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.util', [])
    .factory('Util', Util);

    function Util() {


        function cleanupAngularObject(value) {
            if (value instanceof Array) {
                for (var i = 0; i < value.length; i++) {
                    cleanupAngularObject(value[i]);
                }
            }
            else if (value instanceof Object) {
                for (var property in value) {
                    if (/^\$+/.test(property)) {
                        delete value[property];
                    }
                    else {
                        cleanupAngularObject(value[property]);
                    }
                }

            }
        }


        return {
            cleanupAngularObject: cleanupAngularObject
        };
    }

}(this));
