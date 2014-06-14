(function(sandbox) {
    'use strict';
    sandbox.angular.module('amb.menu.mainMenu', [])
    .directive('mainMenu', mainMenu);


    function mainMenu() {
        // body...
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/app/common/menu/main-menu.tpl.html'
        };

    }

}(this));
