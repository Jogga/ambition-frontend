sandbox.angular.module('amb.newAmbition', [
    'ngRoute',
    'amb.model.Ambition',
    'amb.newAmbition.newAmbitionController'
])
.config(function ($routeProvider) {
    $routeProvider.when('/new-ambition', {
        templateUrl: 'screens/new-ambition/new-ambition-tpl.html',
        controller: 'NewAmbitionController'
    });
});
