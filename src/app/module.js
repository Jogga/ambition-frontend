(function (exports) {
    'use strict';

    exports.angular.module('amb', [
        'ngRoute',
        'amb.ambitions.ambitionsController',
        'amb.ambitions.newAmbitionDirective'
    ]).config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/app/screens/ambitions/ambitions.tpl.html',
            controller: 'ambitionsController'
        });
    });
}(this));
