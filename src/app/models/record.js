(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.Record', [
        'ngResource',
        'amb.routes'
    ])
    .factory('Record', function ($resource, routes) {

        var URL = routes.recordsUrl + '/:id';
        var AMBITION_RECORD_URL = routes.ambitionsUrl + '/:ambitionId' + routes.recordsPath + '/:id';

        var Record = $resource(URL, {
            id: '@id',
            ambitionId: '@ambitionId'
        }, {
            create: {
                method: 'POST',
                url: AMBITION_RECORD_URL
            }

        });

        return Record;
    });

}(this));
