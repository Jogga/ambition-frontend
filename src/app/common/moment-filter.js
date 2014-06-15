(function (sandbox) {
    'use strict';

    sandbox.angular.module('amb.common.momentFilter', [])
    .filter('moment', moment);

    function moment() {
        return function (input, dateFormat) {
            if (!dateFormat) {
                return sandbox.moment(input).calendar();
            }
        };
    }

 }(this));
