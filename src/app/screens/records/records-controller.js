(function (exports) {
    'use strict';

    exports.angular.module('amb.records.recordsController', [
        'amb.sharedData',
        'amb.model.ActivityRecord',
        'amb.records.recordListDirective'
    ]).controller('recordsController', recordsController);

    function recordsController($scope, sharedData, ActivityRecord, recordList) {
        $scope.records = recordList;
        $scope.ambitions = sharedData.ambitionList;
    }

}(this));
