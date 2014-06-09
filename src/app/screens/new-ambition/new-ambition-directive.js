(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.newAmbitionDirective', [
    ]).directive('newAmbition', newAmbitionDirective);

    function newAmbitionDirective() {
        return {
            restrict: 'A',
            repalce: true,
            templateUrl: 'src/app/screens/new-ambition/new-ambition.tpl.html',
            link: linkFn
        };

        function linkFn(scope, el, attrs) {
            scope.newAmbition = {name: '', activity: {period: 'day', interval: 1}};
            scope.createAmbition = function () {
                console.log('create new amb', scope.newAmbition);
                scope.doCreateAmbition(scope.newAmbition);
            };
        }
    }
})(this);
