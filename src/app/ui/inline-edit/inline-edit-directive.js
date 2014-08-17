sandbox.angular.module('amb.ui.inlineEdit', [])
.directive('inlineEdit', InlineEdit);


function InlineEdit() {
    return {
        restrict: 'A',
        scope: {
            model: '=inlineEdit',
            doSave: '&onSave',
            doCancel: '&onCancel'
        },
        templateUrl: 'ui/inline-edit/inline-edit-tpl.html',
        link: linkFn
    };



    function linkFn(scope, element, attrs) {
        var previousValue;

        scope.edit = function () {
            previousValue = scope.model;
            scope.editModeActive = true;
        };

        scope.save = function () {
            if (!scope.model && scope.model === '') { scope.cancel(); }
            previousValue = scope.model;
            scope.doSave({updatedValue: scope.model});
            scope.editModeActive = false;
        };

        scope.cancel = function () {
            scope.model = previousValue;
            scope.editModeActive = false;
            scope.doCancel();
        };
        // scope.$watch('editModeActive', function (isEditMode) {
        //     if (isEditMode) {
        //         scope.$on('keyup:esc', function () {
        //             scope.$apply(function () {
        //                 scope.cancel();
        //             });
        //         });
        //
        //         scope.$on('keyup:enter', function () {
        //             scope.$apply(function () {
        //                 scope.save();
        //             });
        //         });
        //     }
        // });

    }
}