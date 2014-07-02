(function(exports) {
    'use strict';

    exports.angular.module('amb.model.Activity', [
        'ngResource',
        'amb.routes'
    ])
    .factory('Activity', function ($resource, routes) {

        var URL = routes.activitiesUrl + '/:id';

        var Activity = $resource(URL, {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                url: URL
            }
        });

        return Activity;

    });

}(this));
