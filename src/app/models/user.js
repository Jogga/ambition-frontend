(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.model.User', [
        'ngResource',
        'amb.routes'
    ])
    .factory('User', function ($resource, routes) {

        var URL = routes.usersUrl + '/:id';

        var User = $resource(URL, {
            id: '@id'
        }, {
            me: {
                method: 'GET',
                url: URL + '/me'
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
