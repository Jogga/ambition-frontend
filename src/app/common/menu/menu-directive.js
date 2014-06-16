(function(sandbox) {
    'use strict';
    sandbox.angular.module('amb.menu.mainMenu', [])
    .directive('mainMenu', mainMenu);


    function mainMenu($location) {
        // body...
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'common/menu/main-menu.tpl.html',
            link: linkFn
        };

        function linkFn(scope, el, attrs) {
            scope.isActive = function (path) {
                if ($location.path().substr(0, path.length) === path) {
                    return true;
                } else {
                    return false;
                }
            };
        }
    }

}(this));
