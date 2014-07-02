(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.activity.ActivityController', [
        'amb.sharedData',
        'amb.model.Ambition',
        'amb.model.Record',
        'amb.functional'
    ])
    .controller('ActivityController', ActivityController);


    function ActivityController($scope, $f, sharedData, Record) {

        var moment = sandbox.moment;
        var today = getWeekday(moment());

        // var mondayOfCurrWeek = moment().startOf('isoweek');
        // var sundayOfCurrWeel = moment().endOf('isoweek');
        // var daysSinceMonday = mondayOfCurrWeek.diff(moment(), 'days');
        // var daysTillSunday = sundayOfCurrWeel.diff(moment(), 'days');

        $scope.ambitions = sharedData.ambitionList;
        // $scope.activities = activityList;
        //
        $scope.getAmbitionsForToday = function () {
            return $scope.ambitions.filter(isRelevantToday);
        };

        $scope.checkAmbition = function (ambition) {
            Record.save({ success: true, ambitionId: ambition.id });
        };

        $scope.missAmbition = function (ambition) {
            Record.save({ success: false, ambitionId: ambition.id });
        };


        function isRelevantToday(ambition) {
            if (ambition.lastRecord) {
                var lastRecDay = getWeekday(sandbox.moment(ambition.lastRecord.createdAt));
                return ambition.interval[today] && lastRecDay !== today;
            }
            return ambition.interval[today];
        }

        function getWeekday (moment) {
            return sandbox.moment.langData('en').weekdaysMin(moment).toLowerCase();
        }

    }

}(this));
