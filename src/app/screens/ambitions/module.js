(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions', [
        'ngRoute',
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.ambitions.AmbitionsController',
        'amb.ambitions.newAmbitionDirective',
        'amb.ui.inlineEdit'
    ]).config(function ($routeProvider, sharedDataProvider) {
        $routeProvider.when('/ambitions', {
            templateUrl: 'screens/ambitions/ambitions.tpl.html',
            controller: 'ambitionsController',
            resolve: sharedDataProvider.init()
        });
    });
}(this));
