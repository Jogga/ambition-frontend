(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.User', [
        'ngResource',
        'amb.config.routes'
    ])
    .factory('User', function ($resource, routes) {

        var baseUrl = routes.usersUrl + '/:id';

        var User = $resource(baseUrl, {
            id: '@id'
        }, {
            me: {
                method: 'GET',
                url: baseUrl + '/me'
            },
            signup: {
                method: 'POST',
                url: routes.signup,
                isArray: false
            },
            login: {
                method: 'POST',
                url: routes.login,
                isArray: false
            }
        });

        return User;

    });

}(this));
