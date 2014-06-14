(function (exports) {
    'use strict';

    exports.angular.module('amb.records', [
        'ngRoute',
        'amb.sharedData',
        'amb.model.ActivityRecord',
        'amb.records.recordsController'
    ])
    .config(function ($routeProvider, sharedDataProvider) {
        $routeProvider.when('/records', {
            templateUrl: 'screens/records/records.tpl.html',
            controller: 'recordsController',
            resolve: sharedDataProvider.extend ({
                recordList: function (ActivityRecord) {
                    return ActivityRecord.query();
                }
            })
        });
    });
}(this));
