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

    $scope.collapsed = true;
    $scope.limit = 5;

    FilesService.GetFiles('', function(files) {
      $scope.files = files;
      console.log('files are', files);
      console.log($("#file-list").height());
    });

    FilesService.GetFiles('46b3f5c4-2917-5059-a3f0-84727d8a5a48', function(files) {
      $scope.oneFile = files;
      console.log(files);
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

    $scope.loadFiles = function(query) {
      console.log('hello');
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
