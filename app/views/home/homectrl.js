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

    .controller('HomeCtrl', function($scope, $location, FilesService, TypesService, UsersService) {

        FilesService.GetFiles('', function(files) {
            $scope.files = files;
            console.log('good', files);
        });

        FilesService.GetFiles('46b3f5c4-2917-5059-a3f0-84727d8a5a48', function(files) {
            $scope.files = files;
            console.log('good', files);
        });

        TypesService.GetTypes('', function(types) {
            $scope.types = types;
            console.log('good', types);
        });

        UsersService.GetUsers('', function(users) {
            $scope.users = users;
            console.log('good', users);
        });

        TypesService.GetTypes('article', function(types) {
            $scope.types = types;
            console.log('good', types);
        });

        UsersService.GetUsers(1, function(users) {
            $scope.users = users;
            console.log('good', users);
        });

    });
