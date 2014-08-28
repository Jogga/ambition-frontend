sandbox.angular.module('amb.common.AuthService', [
    'amb.model.User',
    'amb.localStorage',
    'amb.ui.dialog'
]).factory('AuthService', function ($location, $http, User, localStorage, dialog) {

    function confirmLoginFn(res) {
        localStorage.setAccessToken(res.token);
        $http.defaults.headers.common.Authorization = 'Baerer ' + res.token;
    }

    function errorLoginFn(res) {
        dialog.confirm({
            title: 'Sorry, an error occured',
            content: 'There was an error while logging in: ' + res.data.message,
            closeOnly: true
        });
    }

    function login(email, password) {
        return User.login({
            email: email,
            password: password
        }).$promise.then(confirmLoginFn, errorLoginFn);
    }

    function logout() {
        localStorage.deleteAccessToken();
        $http.defaults.headers.common.Authorization = null;
    }

    function loggedIn() {
        var token = localStorage.getAccessToken();
        if (token) {
            $http.defaults.headers.common.Authorization = 'Baerer ' + token;
            return true;
        }
        return false;
    }

    return {
        login : login,
        logout : logout,
        loggedIn : loggedIn
    };
});