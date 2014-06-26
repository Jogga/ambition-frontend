(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.AmbitionsController', [
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.model.ActivityRecord'
    ]).controller('ambitionsController', ambitionsController);

    function ambitionsController($scope, sharedData, Ambition, ActivityRecord) {

        $scope.ambitions = sharedData.ambitionList;

        $scope.updateAmbition = function (ambition, updates, property) {
            if (property && updates) {
                ambition[property] = updates;
            }
            ambition.$update();
        };

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
