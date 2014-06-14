(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.ActivityRecord', [
        'ngResource',
        'amb.config.routes'
    ])
    .factory('ActivityRecord', function ($resource, routes) {

        var URL = routes.recordsUrl + '/:id';

        var ActivityRecord = $resource(URL, {
            id: '@id'
        }, {});

        return ActivityRecord;
    });

}(this));
