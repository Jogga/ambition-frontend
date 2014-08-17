sandbox.angular.module('amb.localStorage', [])
.factory('localStorage', function () {
    var tokenKey = 'ato';

    var localStorage = sandbox.localStorage || {
        setItem: function () {},
        getItem: function () {},
        removeItem: function () {}
    };

    function setAccessToken(token) {
        localStorage.setItem(tokenKey, token);
    }

    function getAccessToken() {
        return localStorage.getItem(tokenKey);
    }

    function deleteAccessToken() {
        localStorage.removeItem(tokenKey);
    }

    return {
        setAccessToken: setAccessToken,
        getAccessToken: getAccessToken,
        deleteAccessToken: deleteAccessToken
    };
});
