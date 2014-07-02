(function(exports) {
    'use strict';

    exports.API_URL = 'http://localhost:3000/api/v1';

    exports.angular.module('amb.routes', [])
    .value('routes', routes());    

    function routes() {
        return {
            ambitionsUrl: exports.API_URL + '/ambitions',
            activitiesUrl: exports.API_URL + '/activities',
            recordsPath: '/records',
            recordsUrl: exports.API_URL + '/records',
            signup: exports.API_URL + '/register',
            login: exports.API_URL + '/auth/local',
            usersUrl: exports.API_URL + '/users'
        };
    }




}(this));
