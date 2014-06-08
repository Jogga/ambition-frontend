(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.ambitionsController', [
    ]).controller('ambitionsController', ambitionsController);

    function ambitionsController($scope) {
        $scope.ambitions = [
            {
                name: 'learn guitar',
                activity: 'play the guitar'
            },
            {
                name: 'get fitter',
                activity: 'workout at the gym'
            }
        ];
    }

}(this));
