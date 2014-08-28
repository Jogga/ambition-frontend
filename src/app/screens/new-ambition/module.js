sandbox.angular.module('amb.newAmbition', [
    'ngRoute',
    'amb.sharedData',
    'amb.model.Ambition',
    'amb.newAmbition.newAmbitionController'
])
.config(function ($routeProvider, sharedDataProvider) {
    $routeProvider.when('/new-ambition', {
        templateUrl: 'screens/new-ambition/new-ambition-tpl.html',
        controller: 'NewAmbitionController',
        resolve: sharedDataProvider.init()
    });
});
