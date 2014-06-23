(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.common.AuthService', [
        'amb.model.User',
        'amb.localStorage'
    ]).factory('AuthService', function ($location, $http, User, localStorage) {

        var currentUser;

        function login(email, password) {

            return User.login({email: email, password: password}).$promise.then(function (res) {
                localStorage.setAccessToken(res.token);
                $http.defaults.headers.common.Authorization = 'Baerer ' + res.token;
            }, function (err) {
                console.log('error logging in', err);
            });
        }

        function logout() {
            localStorage.deleteAccessToken();
            $http.defaults.headers.common.Authorization = null;
        }

        function loggedIn() {
            return localStorage.getAccessToken() ? true : false;
        }

        return {
            login : login,
            logout : logout,
            loggedIn : loggedIn
        };
    });

}(this));
