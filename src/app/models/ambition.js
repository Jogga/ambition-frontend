(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.Ambition', [
        'ngResource',
        'amb.routes',
        'amb.util'
    ])
    .factory('Ambition', function ($resource, routes, Util) {

        var URL = routes.ambitionsUrl + '/:id';

        var Ambition = $resource(URL, {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                url: URL,
                transformRequest: function (ambitionData, headersGetter) {
                    if (ambitionData.lastRecord && ambitionData.lastRecord._id) {
                        ambitionData.lastRecord = ambitionData.lastRecord._id
                    }
                    // need to delete angular properties manually (since using custom request transformer)
                    Util.cleanupAngularObject(ambitionData);
                    var result = JSON.stringify(ambitionData);
                    return result;
                }
            }
        });

        return Ambition;

    });



}(this));
