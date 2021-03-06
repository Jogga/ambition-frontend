sandbox.angular.module('amb.ambition.AmbitionController', [
    'amb.sharedData',
    'amb.model.Ambition',
    'amb.model.Record',
    'amb.ui.inlineEdit',
    'amb.ui.dialog'
]).controller('AmbitionController', AmbitionController);

function AmbitionController($scope, dialog, sharedData, Ambition, Record) {

    $scope.ambitions = sharedData.ambitionList;

    $scope.updateAmbition = function (ambition, updatedValue, property) {
        if (property && updatedValue) {
            ambition[property] = updatedValue;
        }
        if (ambition.$update) {
            ambition.$update();
        }
    };

    $scope.toggleActiveDay = function (ambition, day) {
        ambition.interval[day] = !ambition.interval[day];
        $scope.updateAmbition(ambition);
    };

    $scope.deleteAmbition = function (ambition, index) {
        dialog.confirm({
            title: 'Delete ambition?',
            content: 'Do you really want to delete your ambition "' + ambition.exercise + '"?'
        }).promise.then(function (scope) {
            ambition.$remove().then(function () {
                $scope.ambitions.splice(index, 1);
            });
        });
    };

    $scope.checkAmbition = function (ambition) {
        Record.create({
            success: true,
            ambitionId: ambition.id
        }).$promise.then(function (record) {
            ambition.lastRecord = record;
            ambition.streak = ambition.streak + 1;
        });
    };
}