(function (exports) {
    'use strict';

    exports.angular.module('amb.record.recordListDirective', [
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

            scope.getAmbition = function (id) {
                if (!scope.ambitions) {return {};}
                for (var i = 0; i < scope.ambitions.length; i++) {
                    if (scope.ambitions[i].id === id) {
                        return scope.ambitions[i];
                    }
                }
            };
        }
    }

 }(this));