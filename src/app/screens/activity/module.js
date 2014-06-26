(function (exports) {
    'use strict';

    exports.angular.module('amb.activity', [
        'ngRoute',
        'amb.sharedData',
        'amb.model.ActivityRecord',
        'amb.activity.ActivityController'
    ])
    .config(function ($routeProvider, sharedDataProvider) {
        // var mondayOfCurrWeek = exports.moment().startOf('isoweek');

        $routeProvider.when('/activities', {
            templateUrl: 'screens/activity/activity.tpl.html',
            controller: 'ActivityController',
            resolve: sharedDataProvider.extend({
                activityRecordList: function (ActivityRecord) {
                    return ActivityRecord.query();
                        // startDate: mondayOfCurrWeek,
                        // endDate: exports.moment()
                }
            })
        });
    });


 }(this));
