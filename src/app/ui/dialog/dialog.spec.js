describe('dialog', function () {

    var dialog, $rootScope, dlg, el;
    var angular = window.angular;
    var jasmine = window.jasmine;

    beforeEach(module('amb.ui.dialog'));

    beforeEach(inject(function (_dialog_, _$rootScope_) {
        dialog = _dialog_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function () {
        el = angular.element('<div></div>');
    });

    describe('#.confirm()', function () {
        var testTitle = 'My dialog';
        var testContent = 'test content';

        beforeEach(function () {
            dlg = dialog.confirm({
                attachTo: el,
                title: testTitle,
                content: testContent
            });
        });

        it('shows the configured content', function () {
            expect(el.find('p').text()).toEqual(testContent);
        });

        it('shows the configured title', function () {
            expect(el.find('h3').text()).toEqual(testTitle);
        });

        it('shows the background mask when openend', function () {
            expect(angular.element(el[0].querySelector('.dialog-overlay')).length).toEqual(1);
        });

        it('returns a promsie when #.confirm()', function () {
            expect(dlg.promise.then instanceof Function);
        });

        it('rejects the promise, when #.cancel() is called', function () {
            var catchFn = jasmine.createSpy('catchFn');
            dlg.promise.catch(catchFn);
            dlg.cancel();
            expect(catchFn).toHaveBeenCalled();
        });

        it('fulfills the promise, when #.confirm() is called', function () {
            var catchFn = jasmine.createSpy('catchFn');
            var confirmFn = jasmine.createSpy('confirmFn');
            dlg.promise.then(confirmFn, catchFn);
            dlg.confirm();
            expect(confirmFn).toHaveBeenCalled();
        });
    });

});