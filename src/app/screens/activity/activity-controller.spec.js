describe('activity controller', function () {
    'use strict';

    var $controller, ctrl, $scope;

    beforeEach(module('amb.activity.ActivityController'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();

        var completedAmbition = {
            id: '1',
            exercise:'completedAmbition',
            lastRecord: {createdAt: new Date()},
            interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
        };

        var relevantAmbition = {
            id: '3',
            exercise:'relevantAmbition',
            interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
        }

        var sharedDataMock = {ambitionList: [relevantAmbition, completedAmbition]};
        ctrl = $controller('ActivityController', {$scope: $scope, sharedData: sharedDataMock});
    }));

    it('shows ambitions which do not have a record today ', function () {
        expect($scope.getAmbitionsForToday().length).toEqual(1);
    });

    it('show ambitions which are relevant today', function () {
        var weekday = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        var today = new Date();
        var notTodayAmbition = {
            id: '3',
            exercise:'notTodayAmbition',
            interval: {mo: true, tu: true, we: true, th: true, fr: true, sa: true, su: true}
        };
        notTodayAmbition.interval[weekday[today.getDay()]] = false;
        $scope.ambitions.push(notTodayAmbition);
        expect($scope.getAmbitionsForToday().length).toEqual(1);
    });

});
