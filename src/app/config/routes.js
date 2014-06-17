(function(exports) {
    'use strict';

    exports.angular.module('amb.config.routes', [])
    .value('routes', routes());

    function routes() {
        return {
            ambitionsUrl: exports.CONFIG.API_URL + '/ambitions',
            recordsUrl: exports.CONFIG.API_URL + '/activity-records',
            signup: exports.CONFIG.BASE_URL + '/signup',
            login: exports.CONFIG.BASE_URL + '/login',
            usersUrl: exports.CONFIG.API_URL + '/users'
        };
    }




}(this));
