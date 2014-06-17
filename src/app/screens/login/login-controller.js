(function (exports) {
    'use strict';

    exports.angular.module('amb.login.loginController', [
        'amb.model.User'
    ]).controller('loginController', loginController);

    function loginController($scope, User) {
        $scope.login = function (loginData) {
            User.login(loginData).$promise.then(retrieveAndSaveToken);
        };

        function retrieveAndSaveToken(token) {
            console.log(token);
        }
    }

}(this));
