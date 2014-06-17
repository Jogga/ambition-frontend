(function (exports) {
    'use strict';

    exports.angular.module('amb', [
        'amb.sharedData',
        'amb.templates',
        'amb.menu.mainMenu',
        'amb.login',
        'amb.dashboard',
        'amb.ambitions',
        'amb.records'
    ]).run(function () {
        // exports.moment.lang('de');
    });
}(this));
