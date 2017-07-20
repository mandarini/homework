angular.module('iSite')
    .factory('FilesService', ['$http', '$state', 'WebService', function($http, $state, WebService) {
        var service = {};
        service.GetFiles = function(_id, callback) {
            var endpoint = '/files';
            if (_id.length>0) endpoint=endpoint.concat('/',_id);
            $http({
                method: "GET",
                url: WebService.Endpoint(endpoint)
            }).then(function successCallback(response) {
                var files = response.data;
                callback(files);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
        return service;
    }]);
