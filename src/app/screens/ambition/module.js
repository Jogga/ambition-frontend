(function (exports) {
    'use strict';

    exports.angular.module('amb.ambition', [
        'ngRoute',
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.ui.inlineEdit',
        'amb.ambition.AmbitionController',
        'amb.ambition.newAmbitionDirective'
    ])
    .config(function ($routeProvider, sharedDataProvider) {
        $routeProvider.when('/ambitions', {
            templateUrl: 'screens/ambition/ambition.tpl.html',
            controller: 'AmbitionController',
            resolve: sharedDataProvider.init()
        });
    });
}(this));
