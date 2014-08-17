sandbox.angular.module('amb.login', [
    'ngRoute',
    'amb.login.loginController'
])
.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'screens/login/login.tpl.html',
        controller: 'loginController'
    });
});
