sandbox.angular.module('amb.activity.ActivityController', [
    'amb.model.Ambition',
    'amb.model.Record'
])
.controller('ActivityController', ActivityController);


function ActivityController($scope, ambitionList, Record) {

    var moment = sandbox.moment;
    $scope.today = getWeekday(moment());

    $scope.ambitions = ambitionList;

    $scope.getAmbitionsForToday = function () {
        return $scope.ambitions.filter(isRelevantToday);
    };

    $scope.checkAmbition = function (ambition) {
        Record.create({ success: true, ambitionId: ambition.id }).$promise.then(function (record) {
            ambition.lastRecord = record;
        });
    };

    function isRelevantToday(ambition) {
        // Check if ambition has last record else return if ambition inteval matches today
        if (ambition.lastRecord) {
            // Check if last record was today
            var lastRecordIsToday = !!getDiffInDays(new Date(), ambition.lastRecord.createdAt);
            // return if ambition inteval matches today and last record was not today
            return ambition.interval[$scope.today] && lastRecordIsToday;
        }
        return ambition.interval[$scope.today];
    }

    function getWeekday(moment) {
        return sandbox.moment.langData('en').weekdaysMin(moment).toLowerCase();
    }

    function getDiffInDays(date1, date2) {
        return moment(date1).diff(moment(date2), 'days');
    }

}
