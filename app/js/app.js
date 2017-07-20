'use strict';

var iSite = angular.module('iSite', [
    'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'iSite.home'
]);

iSite.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});

iSite.controller('AppCtrl', function($scope, $log, $state, $rootScope, $location) {
    $scope.$state = $state;
    $scope.fullDate = "MMM dd, y 'at' HH:mm:ss";

    $scope.navClass = function(page) {
        var currentRoute = $location.path().substring(1);
        return page === currentRoute ? 'active' : '';
    };

    /*
    Here I am making a lookup table
    The key is the genre id (given in the movie details) and the value is the genre name.
    This was, with only one API call, I can retrieve the genre name, in order to display it in the movie overview.
    */
    // GenresService.GetGenres('en-US', function(genres) {
    //     $scope.genres = genres.genres;
    //     $rootScope.genreslookup = [];
    //     for (var i = 0; i < $scope.genres.length; i++) {
    //         $rootScope.genreslookup[$scope.genres[i].id] = $scope.genres[i].name;
    //     };
    // });

    $scope.shrinked = false;

});

iSite.filter('millSecondsToTimeString', function() {
    return function(millseconds) {
        var oneSecond = 1000;
        var oneMinute = oneSecond * 60;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;

        var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
        var minutes = Math.floor((millseconds % oneHour) / oneMinute);
        var hours = Math.floor((millseconds % oneDay) / oneHour);
        var days = Math.floor(millseconds / oneDay);

        var timeString = '';
        if (days !== 0) {
            timeString += (days !== 1) ? (days + ' days ') : (days + ' day ');
        }
        if (hours !== 0) {
            timeString += (hours !== 1) ? (hours + ' hours ') : (hours + ' hour ');
        }
        if (minutes !== 0) {
            timeString += (minutes !== 1) ? (minutes + ' minutes ') : (minutes + ' minute ');
        }
        if (seconds !== 0 || millseconds < 1000) {
            timeString += (seconds !== 1) ? (seconds + ' seconds ') : (seconds + ' second ');
        }

        return timeString;
    };
});


iSite.filter('millSecondsToMinutes', function() {
    return function(millseconds) {
        var oneSecond = 1000;
        var oneMinute = oneSecond * 60;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;

        var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
        var minutes = Math.floor((millseconds % oneHour) / oneMinute);
        var hours = Math.floor((millseconds % oneDay) / oneHour);
        var days = Math.floor(millseconds / oneDay);

        var timeString = '';
        if (days !== 0) {
            timeString += (days !== 1) ? (days + ' days ') : (days + ' day ');
        }
        if (hours !== 0) {
            timeString += (hours !== 1) ? (hours + ' hours ') : (hours + ' hour ');
        }

        timeString += (minutes !== 1) ? (minutes + ' minutes ') : (minutes + ' minute ');


        return timeString;
    };
});


iSite.filter('millSecondsToYears', function() {
    return function(millseconds) {
        var oneSecond = 1000;
        var oneMinute = oneSecond * 60;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;
        var oneYear = oneDay * 365;

        var seconds = Math.floor((millseconds % oneMinute) / oneSecond);
        var minutes = Math.floor((millseconds % oneHour) / oneMinute);
        var hours = Math.floor((millseconds % oneDay) / oneHour);
        var days = Math.floor(millseconds / oneDay);
        var years = Math.floor(millseconds / oneYear);
        var timeString = years;

        return timeString;
    };
});
