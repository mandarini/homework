'use strict';

var myApp = angular.module('iSite', [
    'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'myApp.home'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
});

myApp.controller('AppCtrl', function($scope, $log, $state, $rootScope, $location) {
    $scope.$state = $state;
    $scope.fullDate = "MMM dd, y 'at' HH:mm:ss";
});

myApp.filter('millSecondsToTimeString', function() {
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


myApp.filter('millSecondsToMinutes', function() {
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


myApp.filter('millSecondsToYears', function() {
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
