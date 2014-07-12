(function (exports) {
    'use strict';

    exports.angular.module('amb.ambition.newAmbitionDirective', [
        'amb.model.Ambition'
    ]).directive('newAmbition', newAmbitionDirective);

    function newAmbitionDirective(Ambition) {
        return {
            restrict: 'A',
            repalce: true,
            templateUrl: 'screens/ambition/new-ambition/new-ambition.tpl.html',
            link: linkFn
        };

        function linkFn(scope, el, attrs) {

            scope.newAmbition = {
                goal: '',
                exercise: '',
                interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
            };


            scope.createAmbition = function () {
                var newAmbition = scope.newAmbition;
                newAmbition.activities = [newAmbition.activity];
                delete newAmbition.activity;

                var ambition = Ambition.save(newAmbition);
                ambition.$promise.then(function (ambition) {
                    scope.ambitions.push(ambition);
                    scope.showNew = false;
                    scope.newAmbition = {
                        goal: '',
                        exercise: '',
                        interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
                    };
                });
            };
        }
    }
})(this);
