sandbox.angular.module('amb.common.AuthInterceptor', [
    'amb.localStorage'
])
.config(configFn)
.factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($q, $location, localStorage) {
    return {
        responseError: function (response) {

            // Handle user is not authenticated and
            if (response.status === 401) {

                // Delete Token from local storage
                localStorage.deleteAccessToken();

                // Return to login screen
                return $location.path('/login');
            }
            return $q.reject(response);
        }
    };
}

function configFn($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
}