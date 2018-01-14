'use strict';

// Declare app level module which depends on views, and components
angular.module('memberevaluation', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    'chart.js',
    'memberevaluation.login',
    'memberevaluation.navibar',
    'memberevaluation.header',
    'memberevaluation.dashboard',
    'memberevaluation.minisidebar',
    'memberevaluation.menus'
])
    .config(['$locationProvider', '$urlRouterProvider','$stateProvider', function ($locationProvider, $urlRouterProvider,$stateProvider) {
        // $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl: 'login/login.html',
                controller:'LoginController'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl: 'dashboard/dashboard.html',
                controller:'DashboardController'
            });

        // $urlRouterProvider.when('/login', {
        //     templateUrl: 'login/login.html',
        //     controller: 'LoginController'
        // });
        // $urlRouterProvider.when('/dashboard', {
        //     templateUrl: 'dashboard/navibar.html',
        //     controller: 'DashboardController'
        // });

    }])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '500',
            })
            .accentPalette('grey',{'default': '50',});
            // .warnPalette('brown',{'default': '500',});
    })
    .config(['$mdIconProvider', function ($mdIconProvider) {
        $mdIconProvider.defaultIconSet('img/icons/mdi.svg');
        // $mdIconProvider.icon('close', 'img/icons/ic_close_24px.svg');
        // $mdIconProvider.icon('menu', 'img/icons/menu.svg');
        // $mdIconProvider.icon('favorite', 'img/icons/favorite.svg');
        // $mdIconProvider.icon('option', 'img/icons/more_vert.svg');

    }])
    .config(function (ChartJsProvider) {
        ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
    })
;

