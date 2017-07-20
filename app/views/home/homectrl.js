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

    TypesService.GetTypes('', function(types) {
      $scope.types = types;
      console.log('good', types);
    });

    UsersService.GetUsers('', function(users) {
      $scope.users = users;
      console.log('good', users);
    });

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
