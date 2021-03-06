sandbox.angular.module('amb', [
    'amb.common.AuthInterceptor',
    'amb.common.AuthService',
    'amb.sharedData',
    'amb.templates',
    'amb.menu.mainMenu',
    'amb.login',
    'amb.profile',
    'amb.activity',
    'amb.ambition',
    'amb.newAmbition',
    'amb.record'
])
.config(function ($routeProvider) {
    $routeProvider.when('/logout', {
        templateUrl: 'screens/logout-tpl.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
})
.run(function ($rootScope, $location, AuthService) {
    $rootScope.$on('$routeChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (!AuthService.loggedIn()) {
            $location.path('/login');
        }
    });
});
