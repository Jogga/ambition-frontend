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
                if ($location.path().substring(1).indexOf(path.substring(1)) !== -1 && path.substring(1) !== '' ) {
                    return true;
                } else {
                    return false;
                }
            };
        }

    }

}(this));
