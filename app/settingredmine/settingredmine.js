'use strict';

angular.module('memberevaluation.settingredmine', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/settingredmine', {
            templateUrl: 'settingredmine/settingredmine.html',
            controller: 'SettingRedmineController'
        });
    }])

    .controller('SettingRedmineController', [function () {

    }]);