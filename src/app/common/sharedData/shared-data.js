sandbox.angular.module('amb.sharedData', [
    'amb.model.User',
    'amb.model.Ambition'
])
.provider('sharedData', SharedDataProvider);

function SharedDataProvider() {

    var cache = {};

    var sharedData = {
        ambitionList: function (Ambition) {
            if (!cache.ambitionList) {
                cache.ambitionList = Ambition.query();
            }
            return cache.ambitionList;
        },
        currentUser: function (User) {
            if (!cache.currentUser) {
                cache.currentUser = User.me();
            }
            return cache.currentUser;
        }
    };

    this.init = function () {
        return sharedData;
    };

    this.extend = function (additional) {
        return sandbox.angular.extend(additional, sharedData);
    };

    this.$get = function () {
        return cache;
    };
}
