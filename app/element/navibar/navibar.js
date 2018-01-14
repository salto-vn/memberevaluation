'use strict';
angular.module('memberevaluation.navibar', ['memberevaluation.menus'])

    .controller('NaviBarController'
        , ['$scope','$rootScope', '$location', '$mdSidenav', '$mdUtil', '$timeout','MenuService',
            function ($scope, $rootScope, $location, $mdSidenav, $mdUtil, $timeout, MenuService) {
                $scope.menus = MenuService.getAllMenus();
                $scope.toggleLeft = buildToggler('left');
                $scope.mainicon = 'arrow_back';
                function buildToggler(navID) {
                    var debounceFn = $mdUtil.debounce(function () {
                        $mdSidenav(navID)
                            .toggle()
                            .then(function () {
                                console.log("toggle " + navID + " is done");
                            });
                    }, 300);
                    return debounceFn;
                }

                $rootScope.$on("CallParentMethod", function(){
                    $scope.showMiniBar();
                });

                $scope.showMiniBar = function () {
                    var sidebar = angular.element('.sidebar');
                    $scope.mainicon = $scope.mainicon === "arrow_back" ? "menu" : "arrow_back";
                    if ($scope.lockLeft) {
                        $timeout(function () {
                            sidebar[0].style.display = "";

                        }, 300);
                    } else {
                        sidebar[0].style.display = "none";
                    }
                    $scope.lockLeft=!$scope.lockLeft;
                };


            }]);