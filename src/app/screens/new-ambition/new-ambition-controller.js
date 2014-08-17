sandbox.angular.module('amb.newAmbition.newAmbitionController', [
    'amb.model.Ambition'
])
.controller('NewAmbitionController', function ($scope, Ambition) {
    $scope.newAmbition = {
        goal: '',
        exercise: '',
        interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
    };

    $scope.createAmbition = function () {
        if (!$scope.canCreate()) { return; }

        Ambition.save($scope.newAmbition).$promise.then(function (ambition) {
            // $scope.ambitions.push(ambition);
            $scope.newAmbition = {
                goal: '',
                exercise: '',
                interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
            };
        });
    };

    $scope.canCreate = function () {
        return $scope.newAmbition.exercise && $scope.newAmbition.exercise !== '';
    };
});