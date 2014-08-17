sandbox.angular.module('amb.ambition', [
    'ngRoute',
    'amb.sharedData',
    'amb.ui.inlineEdit',
    'amb.ambition.AmbitionController'
])
.config(function ($routeProvider, sharedDataProvider) {
    $routeProvider.when('/ambitions', {
        templateUrl: 'screens/ambition/ambition.tpl.html',
        controller: 'AmbitionController',
        resolve: sharedDataProvider.init()
    });
});
