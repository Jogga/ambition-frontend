(function (exports) {
    'use strict';

    exports.angular.module('amb.record.RecordController', [
        'amb.sharedData',
        'amb.model.Record',
        'amb.record.recordListDirective'
    ]).controller('RecordController', RecordController);

    function RecordController($scope, sharedData, Record, recordList) {
        var ambitionLookup = {};
        $scope.records = recordList;
        $scope.ambitions = sharedData.ambitionList;

        $scope.removeRecord = function (record, index) {
            record.$remove().then(function (res) {
                $scope.records.splice(index, 1);                
            });
        };

        $scope.ambitions.$promise.then(function (list) {
            list.forEach(function (ambition) {
                ambitionLookup[ambition.id] = ambition;
            });

            recordList.map(function (record) {
                record.ambition = ambitionLookup[record.ambition] || {};
                return record;
            });
        });
    }

}(this));
