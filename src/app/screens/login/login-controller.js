(function (exports) {
    'use strict';

    exports.angular.module('amb.login.loginController', [
        'amb.model.User',
        'amb.common.AuthService'
    ]).controller('loginController', loginController);

    function loginController($scope, $location, User, AuthService) {

        $scope.login = function (user) {
            AuthService.login(user.email, user.password).then(function () {
                $location.path('/activities');
            });
        };

        $scope.register = function (user) {
            User.save({email: user.email, password: user.password}).$promise.then(function (newUser) {
                newUser.password = user.password;
                $scope.login(newUser);
            });
        };
    }

}(this));
