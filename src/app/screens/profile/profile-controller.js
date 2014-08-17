sandbox.angular.module('amb.profile.profileController', [
    'amb.sharedData',
    'amb.common.AuthService'
])
.controller('profileController', profileController);


function profileController($scope, $location, AuthService, sharedData) {

    $scope.logout = function () {
        AuthService.logout();
        $location.path('/logout');
    };
    sharedData.currentUser.$promise.then(function (user) {
        $scope.currentUser = user;
    });

}