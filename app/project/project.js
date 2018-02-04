'use strict';
angular.module('memberevaluation.project', [])

    .controller('ProjectController'
        , ['$scope', '$rootScope', '$location',
            function ($scope, $rootScope, $location) {
                $rootScope.currentNavItem = 'Home';
            }]);
