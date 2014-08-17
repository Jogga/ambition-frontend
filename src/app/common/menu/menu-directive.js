sandbox.angular.module('amb.menu.mainMenu', [
    'amb.common.AuthService'
])
.directive('mainMenu', mainMenu);


function mainMenu($location, AuthService) {
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

        scope.isLoggedIn = function () {
            return AuthService.loggedIn();
        };

    }
}