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

        $scope.removeRecord = function (record) {
            record.$remove().then(function (res) {
                for (var i = 0; i < $scope.records.length; i++) {
                    if ($scope.records[i].id === record.id) {
                        $scope.records.splice(i, 1);
                        break;
                    }
                }
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
