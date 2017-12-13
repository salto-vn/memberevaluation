'use strict';

angular.module('memberevaluation.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope','$location',function ($scope, $location) {
        $scope.login = function (formValid) {
            if(formValid) {
                $location.path('settingredmine');
            }
        }
    }]);