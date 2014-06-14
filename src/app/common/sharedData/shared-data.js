(function (exports) {
    'use strict';

    exports.angular.module('amb.sharedData', [
        'amb.model.Ambition'
    ])
    .provider('sharedData', SharedDataProvider);

    function SharedDataProvider() {

        var cache = {};

        var sharedData = {
            ambitionList: function (Ambition) {
                if (!cache.ambitionList) {
                    cache.ambitionList = Ambition.query();
                }
                return cache.ambitionList;
            }
        };

        this.init = function () {
            return sharedData;
        };

        this.extend = function (additional) {
            return exports.angular.extend(additional, sharedData);
        };

        this.$get = function () {
            return cache;
        };
    }

 }(this));
