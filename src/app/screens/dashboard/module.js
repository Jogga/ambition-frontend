(function (exports) {
    'use strict';

    exports.angular.module('amb.dashboard', [
        'ngRoute',
        'amb.model.ActivityRecord',
        'amb.sharedData',
        'amb.dashboard.dashboardController'
    ])
    .config(function ($routeProvider, sharedDataProvider) {
        var mondayOfCurrWeek = exports.moment().startOf('isoweek');

        $routeProvider.when('/', {
            templateUrl: 'screens/dashboard/dashboard.tpl.html',
            controller: 'dashboardController',
            resolve: sharedDataProvider.extend({
                activityRecordList: function (ActivityRecord) {
                    return ActivityRecord.query({
                        startDate: mondayOfCurrWeek,
                        endDate: exports.moment()
                    });
                }
            })
        });
    });


 }(this));
