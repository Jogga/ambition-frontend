(function (exports) {
    'use strict';

    exports.angular.module('amb.record.RecordController', [
        'amb.sharedData',
        'amb.model.ActivityRecord',
        'amb.record.recordListDirective'
    ]).controller('RecordController', RecordController);

    function RecordController($scope, sharedData, ActivityRecord, recordList) {
        $scope.records = recordList;
        $scope.ambitions = sharedData.ambitionList;
        $scope.removeRecord = function (record) {
            record.$remove();
        };
    }

}(this));
