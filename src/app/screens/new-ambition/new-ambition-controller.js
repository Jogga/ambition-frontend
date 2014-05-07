(function (exports) {
    'use strict';

    exports.angular.module('amb.ambitions.newAmbitionController', [
    ]).controller('newAmbitionController', newAmbitionController);

    function newAmbitionController($scope) {
        $scope.newAmbition = {name: ''};
    }
})(this);
