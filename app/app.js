'use strict';

// Declare app level module which depends on views, and components
angular.module('memberevaluation', [
    'ngRoute',
    'memberevaluation.login',
    'memberevaluation.settingredmine',
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/login'});
}]);
