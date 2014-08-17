sandbox.angular.module('amb.activity', [
    'ngRoute',
    'amb.sharedData',
    'amb.model.Record',
    'amb.activity.ActivityController'
])
.config(function ($routeProvider, sharedDataProvider) {
    // var mondayOfCurrWeek = sandbox.moment().startOf('isoweek');

    $routeProvider.when('/activity', {
        templateUrl: 'screens/activity/activity.tpl.html',
        controller: 'ActivityController',
        resolve: sharedDataProvider.extend({})
    });
});