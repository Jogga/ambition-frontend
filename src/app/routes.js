(function(exports) {
    'use strict';

    exports.API_URL = 'http://localhost:3000/api/v1';

    exports.angular.module('amb.routes', [])
    .value('routes', routes());

    function routes() {
        return {
            ambitionsUrl: exports.API_URL + '/ambitions',
            recordsUrl: exports.API_URL + '/activity-records',
            signup: exports.API_URL + '/register',
            login: exports.API_URL + '/auth/local',
            usersUrl: exports.API_URL + '/users'
        };
    }




}(this));
