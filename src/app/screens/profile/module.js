sandbox.angular.module('amb.profile', [
    'ngRoute',
    'amb.sharedData',
    'amb.profile.profileController'
])
.config(function ($routeProvider, sharedDataProvider) {
    $routeProvider.when('/profile', {
        templateUrl: 'screens/profile/profile-tpl.html',
        controller: 'profileController',
        resolve: sharedDataProvider.init()
    });
});
