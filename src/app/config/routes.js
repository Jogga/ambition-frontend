(function(sandbox) {
    'use strict';

    sandbox.angular.module('amb.config.routes', [])
    .value('routes', routes());

    function routes() {
        return {
            ambitionsUrl: sandbox.CONFIG.API_URL + '/ambitions',
            recordsUrl: sandbox.CONFIG.API_URL + '/activity-records'
        };
    }




}(this));
