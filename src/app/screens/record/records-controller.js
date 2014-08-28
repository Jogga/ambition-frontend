sandbox.angular.module('amb.record.RecordController', [
    'amb.functional',
    'amb.model.Record',
    'amb.record.recordListDirective'
]).controller('RecordController', RecordController);

function RecordController($scope, f, Record, ambitionList, recordList) {

    $scope.records = recordList;
    $scope.ambitions = ambitionList;

    $scope.removeRecord = function (record, index) {
        record.$remove().then(function (res) {
            $scope.records.splice(index, 1);
        });
    };

    $scope.ambitions.$promise.then(function (ambitionList) {
        var ambitionMap = f.createMap(ambitionList);

        recordList.map(function (record) {
            record.ambition = ambitionMap[record.ambition] || {};
            return record;
        });
    });
}
