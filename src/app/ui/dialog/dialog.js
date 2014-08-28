sandbox.angular.module('amb.ui.dialog', [
])
.factory('dialog', dialogFactory);

function dialogFactory($q, $compile, $rootScope) {
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

        // Confirm function which resolves the dialog promise
        scope.confirm = function () {
            deferred.resolve(scope);
            if (!$rootScope.$$phase) { scope.$digest(); }
            scope.$destroy();
        };

        // Cancel function which rejects the dialog promise
        scope.cancel = function () {
            deferred.reject();
            if (!$rootScope.$$phase) { scope.$digest(); }
            scope.$destroy();
        };

        scope.$on('$destroy', function () {
            element.remove();

        });

        return {
            confirm: scope.confirm,
            cancel: scope.cancel,
            promise: deferred.promise
        };
    }

}