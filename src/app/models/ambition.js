(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.Ambition', [
        'ngResource',
        'amb.routes'
    ])
    .factory('Ambition', function ($resource, routes) {

        var AMBITIONS_URL = routes.ambitionsUrl + '/:id';

        var Ambition = $resource(AMBITIONS_URL, {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                url: AMBITIONS_URL
            }
        });

        return Ambition;

    });

}(this));
