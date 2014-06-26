(function (exports) {
    'use strict';

    exports.angular.module('amb.record', [
        'ngRoute',
        'amb.sharedData',
        'amb.model.ActivityRecord',
        'amb.record.RecordController'
    ])
    .config(function ($routeProvider, sharedDataProvider) {
        $routeProvider.when('/records', {
            templateUrl: 'screens/record/record.tpl.html',
            controller: 'RecordController',
            resolve: sharedDataProvider.extend ({
                recordList: function (ActivityRecord) {
                    return ActivityRecord.query();
                }
            })
        });
    });
}(this));
