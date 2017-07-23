'use strict';

angular.module('iSite.home', ['ngRoute', 'ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home/homepage.html',
                controller: 'HomeCtrl',
                name: 'home'
            });
    }])

    .controller('HomeCtrl', function($scope, $location, $rootScope, WebService, FilesService, TypesService, UsersService, $cacheFactory) {

        $scope.collapsed = true;
        $scope.limit = 5;

        FilesService.GetFiles('', function(files) {
            $scope.files = files;
        });

        TypesService.GetTypes('', function(types) {
            $scope.types = types;
        });

        //This is to show a loader until user data is loaded, since the response is slow or fails.
        $rootScope.loading = true;

        $rootScope.LoadUsers = function() {
            UsersService.GetUsers(function(users, mapped) {
                if (users.status == 200) {
                    $scope.users = users.data;
                    $scope.mapped = mapped;
                    console.log('mapped', mapped);
                    console.log('users', $scope.users);
                } else {
                    $scope.users = false;
                }
                $scope.loading = false;
            });
        }

        $rootScope.LoadUsers();

        $scope.loadFiles = function(query) {
            $scope.query = query;
        }

        $scope.viewAll = function(limit) {

            $scope.limit = limit;
            if (limit) {
                $scope.collapsed = true;
            } else {
                $scope.collapsed = false;
            }

        }

    });
