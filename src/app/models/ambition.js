(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.Ambition', [
        'ngResource',
        'amb.routes'
    ])
    .factory('Ambition', function ($resource, routes) {

        var URL = routes.ambitionsUrl + '/:id';

        var Ambition = $resource(URL, {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                url: URL
            }
        });

        return Ambition;

    });

}(this));
