'use strict';
angular.module('memberevaluation.header', ['memberevaluation.menus'])

    .controller('HeaderController'
        , ['$scope','$rootScope', '$location','MenuService',
            function ($scope, $rootScope, $location,MenuService) {

                $scope.user = {
                    "name": "Ngo Tuan Anh",
                    "email": "rockerbom@gmail.com",
                    "phone": "0909-123-091",
                    "picture":"/img/avatar/avatar.png"
                };
                $scope.mainicon = 'menu';
                $scope.showMiniBar = function () {
                    $rootScope.$emit("CallParentMethod", {});
                    $scope.mainicon = $scope.mainicon === "arrow_back" ? "menu" : "arrow_back";
                };


            }]);