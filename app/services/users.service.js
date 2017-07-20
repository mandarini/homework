angular.module('iSite')
    .factory('UsersService', ['$http', '$state', 'WebService', function($http, $state, WebService) {
        var service = {};
        service.GetUsers = function(_id, callback) {
            var endpoint = '/users';
            if (typeof _id == 'number') endpoint=endpoint.concat('/',_id);
            $http({
                method: "GET",
                url: WebService.Endpoint(endpoint)
            }).then(function successCallback(response) {
                var users = response.data;
                callback(users);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
        return service;
    }]);
