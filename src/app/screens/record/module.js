sandbox.angular.module('amb.record', [
    'ngRoute',
    'amb.sharedData',
    'amb.model.Record',
    'amb.record.RecordController'
])
.config(function ($routeProvider, sharedDataProvider) {
    $routeProvider.when('/records', {
        templateUrl: 'screens/record/record.tpl.html',
        controller: 'RecordController',
        resolve: sharedDataProvider.extend({
            recordList: function (Record, sharedData) {
                return Record.query().$promise;
            }
        })
    });
});
