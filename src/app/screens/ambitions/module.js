(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions', [
        'ngRoute',
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.ambitions.AmbitionsController',
        'amb.ambitions.newAmbitionDirective'
    ]).config(function ($routeProvider, sharedDataProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/app/screens/ambitions/ambitions.tpl.html',
            controller: 'ambitionsController',
            resolve: sharedDataProvider.init()
        });
    });
}(this));
