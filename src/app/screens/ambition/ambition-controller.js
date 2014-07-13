(function (exports) {
    'use strict';

    exports.angular.module('amb.ambition.AmbitionController', [
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.model.Record'
    ]).controller('AmbitionController', AmbitionController);

    function AmbitionController($scope, sharedData, Ambition, Record) {

        $scope.ambitions = sharedData.ambitionList;

        $scope.updateAmbition = function (ambition, updatedValue, property) {
            if (property && updatedValue) {
                ambition[property] = updatedValue;
            }
            ambition.$update();
        };

        $scope.toggleActiveDay = function (ambition, day) {
            ambition.interval[day] = !ambition.interval[day];
            $scope.updateAmbition(ambition);
        };

        $scope.deleteAmbition = function (ambition, index) {
            ambition.$remove().then(function (success) {
                $scope.ambitions.splice(index, 1);
            });
        };

        $scope.checkAmbition = function (ambition) {
            Record.create({ success: true, ambitionId: ambition.id }).$promise.then(function (record) {
                ambition.lastRecord = record;
                ambition.streak = ambition.streak + 1;
            });
        }
    }

}(this));
