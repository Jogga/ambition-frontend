sandbox.angular.module('amb.ui.dialog', [
])
.factory('dialog', dialogFactory);

function dialogFactory($q, $compile, $rootScope, $timeout) {
    return {
        confirm: confirmFn
    };

    function confirmFn(config) {
        config = config || {};
        config.attachTo = config.attachTo || sandbox.angular.element(document).find('body');
        var deferred = $q.defer();
        var scope = $rootScope.$new();

        var element = $compile([
            '<div class="dialog-overlay"></div>',
            '<div class="dialog-box">',
            '<div class="dialog-content">',
            '<h3>' + config.title + '</h3>',
            '<p>' + config.content + '</p>',
            '<div class="dialog-buttons">',
            '<button class="amb-button" ng-click="cancel()">No</button>',
            '<button class="amb-button" ng-click="confirm()">Yes</button>',
            '</div>',
            '</div>',
            '</div>'
        ].join(''))(scope);

        config.attachTo.append(element);

        scope.confirm = function () {
            console.log('confirm called');
            deferred.resolve(scope);
            scope.$destroy();
        };

        scope.cancel = function () {
            console.log('cancel called');
            deferred.reject();
            if (!$rootScope.$$phase) { scope.$digest(); }
            // $timeout(function () {
            scope.$destroy();
            // }, 0);
        };

        scope.$on('$destroy', function () {
            // config.attachTo.removeClass('overlay-open');
            element.remove();
            // It might be a good idea to cancel the promise here
        });

        return {
            confirm: scope.confirm,
            cancel: scope.cancel,
            promise: deferred.promise
        };
    }

}