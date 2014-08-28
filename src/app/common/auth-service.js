sandbox.angular.module('amb.common.AuthService', [
    'amb.model.User',
    'amb.localStorage',
    'amb.ui.dialog'
]).factory('AuthService', function ($location, $http, User, localStorage, dialog) {

    // Handles success when logging successful
    function confirmLoginFn(res) {
        localStorage.setAccessToken(res.token);
        $http.defaults.headers.common.Authorization = 'Baerer ' + res.token;
    }

    // Handles error when logging failed
    function errorLoginFn(res) {
        dialog.confirm({
            title: 'Sorry, an error occured',
            content: 'There was an error while logging in: ' + res.data.message,
            closeOnly: true
        });
    }

    // Login mehtod, requests the login
    function login(email, password) {
        return User.login({
            email: email,
            password: password
        }).$promise.then(confirmLoginFn, errorLoginFn);
    }

    // Logout merhod, deletes token from local storage + HTTP header auth 
    function logout() {
        localStorage.deleteAccessToken();
        $http.defaults.headers.common.Authorization = null;
    }
    
    // Checks if a user is logged in
    function loggedIn() {
        var token = localStorage.getAccessToken();
        if (token) {
            $http.defaults.headers.common.Authorization = 'Baerer ' + token;
            return true;
        }
        return false;
    }

    // Exposed as service methods
    return {
        login : login,
        logout : logout,
        loggedIn : loggedIn
    };
});
