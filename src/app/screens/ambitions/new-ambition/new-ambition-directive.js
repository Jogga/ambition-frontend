(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.newAmbitionDirective', [
        'amb.model.Ambition'
    ]).directive('newAmbition', newAmbitionDirective);

    function newAmbitionDirective(Ambition) {
        return {
            restrict: 'A',
            repalce: true,
            templateUrl: 'screens/ambitions/new-ambition/new-ambition.tpl.html',
            link: linkFn
        };

        function linkFn(scope, el, attrs) {

            scope.newAmbition = {name: '', activity: {period: 'day', interval: 1}};


            scope.createAmbition = function () {
                var newAmbition = scope.newAmbition;
                newAmbition.activities = [newAmbition.activity];
                delete newAmbition.activity;

                var ambition = Ambition.save(newAmbition);
                ambition.$promise.then(function (ambition) {
                    scope.ambitions.push(ambition);
                    scope.newAmbition = {name: '', activity: {period: 'day', interval: 1}};
                });
            };
        }
    }
})(this);
