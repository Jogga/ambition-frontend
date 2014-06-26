(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.ActivityRecord', [
        'ngResource',
        'amb.routes'
    ])
    .factory('ActivityRecord', function ($resource, routes) {

        var URL = routes.activitiesUrl + '/:activity' + routes.recordsPath + '/:id';

        var ActivityRecord = $resource(URL, {
            id: '@id'
        }, {});

        return ActivityRecord;
    });

}(this));
