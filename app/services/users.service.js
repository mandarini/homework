angular.module('iSite')
    .factory('UsersService', ['$http', '$state', 'WebService', function($http, $state, WebService) {
        var service = {};
        service.GetUsers = function(callback) {
            var endpoint = '/users';

            /*

            This endpoint sometimes returns Error 500:
            To handle this, I will repeat the request to the server
            until I have a response. However, I will only repeat it 5 times maximum,
            because the server could just be down.

            Once a request is successful, it will get cached, and it will be used
            in any other place it is needed.

            */

            var counter = 0;

            function sendRequest() {
                $http({
                    method: "GET",
                    url: WebService.Endpoint(endpoint),
                    cache: true
                }).then(function successCallback(response) {
                    /*
                    Here I am creatingn a map of the array of Users
                    in order to use it when requesting data for a specific user id
                    (when, for example, showing the name of the user who modified or created a file).
                    I am doing this to avoid recursive API calls, which is generaly bad practice,
                    but also, specifically for this endpoint, which is slow or fails to respond.
                    This is generaly safe, since we do not expect the user data to change frequently.
                    We will have a fallback, when the id is not found on the map, to update the user table,
                    because this means that new data were added.
                    */
                    var mappedUsers = new Map();
                    response.data.map(function(obj) {
                      mappedUsers.set(obj.id, obj.givenName.concat(' ', obj.familyName));
                    });
                    callback(response, mappedUsers);
                }, function errorCallback(response) {
                    console.log('error', response);
                    if (counter < 5) {
                        sendRequest();
                        counter++;
                    } else {
                        callback(response);
                    }
                });
            };
            sendRequest();
        }
        return service;
    }]);
