(function (exports) {
    'use strict';

    exports.angular.module('amb', [
        'ngRoute',
        'amb.ambitions.ambitionsController',
        'amb.ambitions.newAmbitionController'
    ]).config(function ($routeProvider) {
        $routeProvider.when('/ambitions', {
            templateUrl: 'src/app/screens/ambitions/ambitions.tpl.html',
            controller: 'ambitionsController'
        }).when('/ambitions/new', {
            templateUrl: 'src/app/screens/new-ambition/new-ambition.tpl.html',
            controller: 'newAmbitionController'
        });
    });
}(this));
