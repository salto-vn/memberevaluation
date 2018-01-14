'use strict';
angular.module('memberevaluation.minisidebar', ['memberevaluation.menus'])

    .controller('MiniSidebarController'
        , ['$scope','$rootScope', '$location', 'MenuService',
            function ($scope, $rootScope, $location,MenuService) {

                $scope.menus = MenuService.getAllMenus();

            }]);