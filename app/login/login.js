'use strict';

angular.module('memberevaluation.login', [])
    .controller('LoginController', ['$scope','$rootScope','$location',function ($scope,$rootScope, $location) {
        $rootScope.isLogin = false;
        $scope.login = function (formValid) {

            if(formValid) {
                $rootScope.isLogin = true;
                $location.path('dashboard');
            } else {
                $rootScope.isLogin = false;
            }
        }
    }]);