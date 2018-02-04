'use strict';
angular.module('memberevaluation.navibar', ['memberevaluation.menus'])

    .controller('NaviBarController'
        , ['$scope','$rootScope', '$location', '$mdSidenav', '$mdUtil', '$timeout','MenuService',
            function ($scope, $rootScope, $location, $mdSidenav, $mdUtil, $timeout, MenuService) {
                $scope.menus = MenuService.getAllMenus();
                $rootScope.toggleLeft = buildToggler('left');
                $scope.lockLeft = false;
                $scope.mainicon = 'menu';
                // function buildToggler(componentId) {
                //     return function () {
                //         $mdSidenav(componentId).toggle();
                //     };
                // }
                function buildToggler(navID) {
                    var debounceFn = $mdUtil.debounce(function () {
                        $mdSidenav(navID)
                            .toggle()
                            .then(function () {
                                console.log("toggle " + navID + " is done");
                            });
                    }, 100);
                    return debounceFn;
                }

                $rootScope.navibarClose = function () {
                    $mdSidenav('left').close()
                        .then(function () {
                            console.log("close LEFT is done");
                        });

                };

                $rootScope.$on("CallParentMethod", function(){
                    $scope.showMiniBar();
                });

                $scope.showMiniBar = function () {
                    $scope.mainicon = $scope.mainicon === "arrow_back" ? "menu" : "arrow_back";
                    $scope.lockLeft=!$scope.lockLeft;
                };

                $rootScope.go = function ( path ) {
                    $location.path( path );
                    $scope.lockLeft=false;
                };

            }]);