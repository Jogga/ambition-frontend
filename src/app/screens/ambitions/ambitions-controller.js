(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.ambitionsController', [
    ]).controller('ambitionsController', ambitionsController);

    function ambitionsController($scope) {
        $scope.ambitions = [
            {name: 'learn guitar'},
            {name: 'get fitter'}
        ];
    }

}(this));
