angular.module('iSite')
    .factory('TypesService', ['$http', '$state', 'WebService', function($http, $state, WebService) {
        var service = {};
        service.GetTypes= function(_id, callback) {
            var endpoint = '/types';
            if (_id.length>0) endpoint=endpoint.concat('/',_id);
            $http({
                method: "GET",
                url: WebService.Endpoint(endpoint)
            }).then(function successCallback(response) {
                var types = response.data;
                callback(types);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
        return service;
    }]);
