(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.AmbitionsController', [
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.model.ActivityRecord'
    ]).controller('ambitionsController', ambitionsController);

    function ambitionsController($scope, sharedData, Ambition, ActivityRecord) {

        $scope.ambitions = sharedData.ambitionList;

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

        $scope.checkActivity = function (activity) {
            ActivityRecord.save({
                success: true,
                activity_id: activity.id,
                ambition_id: activity.ambition_id
            });
        };

        $scope.missActivity = function (activity) {
            ActivityRecord.save({
                success: false,
                activity_id: activity.id,
                ambition_id: activity.ambition_id
            });
        };
    }

}(this));
