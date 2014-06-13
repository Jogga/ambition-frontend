(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.ambitionsController', [
        'amb.ambitions.Ambition'
    ]).controller('ambitionsController', ambitionsController);

    function ambitionsController($scope, Ambition) {

        Ambition.query().$promise.then(function (res) {
            $scope.ambitions = res ? res : [];
        });

        $scope.deleteAmbition = function (ambition) {
            ambition.$remove().then(function (success) {
                for (var i = 0, max = $scope.ambitions.length; i < max; i++) {
                    if ($scope.ambitions[i].id === ambition.id) {
                        $scope.ambitions.splice(i, 1);
                        break;
                    }
                }
            });
        };

    }

}(this));
