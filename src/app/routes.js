sandbox.API_URL = 'http://localhost:3000/api/v1';

sandbox.angular.module('amb.routes', [])
.value('routes', routes());

function routes() {
    return {
        ambitionsUrl: sandbox.API_URL + '/ambitions',
        activitiesUrl: sandbox.API_URL + '/activities',
        recordsPath: '/records',
        recordsUrl: sandbox.API_URL + '/records',
        signup: sandbox.API_URL + '/register',
        login: sandbox.API_URL + '/auth/local',
        usersUrl: sandbox.API_URL + '/users'
    };
}
