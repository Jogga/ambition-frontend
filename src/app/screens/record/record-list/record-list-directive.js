sandbox.angular.module('amb.record.recordListDirective', [
    'amb.common.momentFilter'
])
.directive('recordList', recordList);

function recordList() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'screens/record/record-list/record-list.tpl.html',
        link: linkFn
    };


    function linkFn(scope, el, attrs) {
    }
}