(function (exports) {
    'use strict';

    exports.angular.module('amb.activity.ActivityController', [
        'amb.model.ActivityRecord'
    ])
    .controller('ActivityController', ActivityController);

    function ActivityController($scope, sharedData, activityRecordList, ActivityRecord) {
        // var moment = exports.moment;
        // var mondayOfCurrWeek = moment().startOf('isoweek');
        // var sundayOfCurrWeel = moment().endOf('isoweek');
        // var daysSinceMonday = mondayOfCurrWeek.diff(moment(), 'days');
        // var daysTillSunday = sundayOfCurrWeel.diff(moment(), 'days');

        // console.log(daysSinceMonday, daysTillSunday);

        $scope.ambitions = sharedData.ambitionList;
        $scope.activityRecords = activityRecordList;


        $scope.getActivitiesForToday = function () {
            return getActivitiesForToday();
        };

        $scope.checkActivity = function (activity) {
            createRecord(true, activity);
        };

        $scope.missActivity = function (activity) {
            createRecord(false, activity);
        };

        function createRecord(success, activity) {
            ActivityRecord.save({
                success: success,
                activity: activity.id,
                ambition: activity.ambitionId
            });
        }

        function getActivitiesForToday() {
            // return [].concat.apply([], $scope.ambitions.map(toActivities)).filter(isRelevantToday);
            return [].concat.apply([], $scope.ambitions.map(toActivities)).filter(isActive);
        }

        function isActive(activity) {
            return false;
        }

        // @TODO optimize performance e.g. with memoization
        // function isRelevantToday(activity) {
        //     for (var i = 0; i < $scope.activityRecords.length; i++) {
        //         var record = $scope.activityRecords[i];
        //         if (record.activity === activity.id && isToday(record.created_at)) {
        //             return false;
        //         }
        //     }
        //     return true;
        // }

        function toActivities(ambition) {
            ambition.activities.map(function (activity) {
                activity.ambition = ambition;
                return activity;
            });

            return ambition.activities;
        }

        // function isToday(date) {
        //     // console.log(moment(date).format('DD.MM.YY - HH:mm:SS'), date);
        //     return moment(date).get('year') === moment().get('year') &&
        //         moment(date).get('month') === moment().get('month') &&
        //         moment(date).get('date') === moment().get('date');
        // }
    }

 }(this));
