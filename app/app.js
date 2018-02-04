'use strict';

// Declare app level module which depends on views, and components
angular.module('memberevaluation', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    'chart.js',
    'md.data.table',
    'memberevaluation.login',
    'memberevaluation.navibar',
    'memberevaluation.header',
    'memberevaluation.dashboard',
    'memberevaluation.projectquality',
    'memberevaluation.projectsummary',
    'memberevaluation.minisidebar',
    'memberevaluation.menus',
    'memberevaluation.project',
    'memberevaluation.projectmembers',
    'memberevaluation.starRating'
])
    .config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function ($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state({
                name: 'login',
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController'
            })
            .state({
                name: 'dashboard',
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .state({
                name: 'project',
                url: '/project/:id',
                templateUrl: 'project/project.html',
            })
            .state({
                name: 'project.summary',
                url: '/summary',
                templateUrl: 'project/summary/projectsummary.html',
                controller: 'ProjectSummaryController'
            })
            .state({
                name: 'project.quality',
                url: '/quality',
                templateUrl: 'project/quality/projectquality.html',
                controller: 'ProjectQualityController'
            })
            .state({
                name: 'project.members',
                url: '/members',
                templateUrl: 'project/members/projectmembers.html',
                controller: 'ProjectMembersController'
            });
    }])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '200',
                'hue-3': '300',
            })
            .backgroundPalette('grey', {
                'default': '50'
            });
        // .accentPalette('grey',{'default': '50',});
        // .warnPalette('brown',{'default': '500',});
    })
    .config(['$mdIconProvider', function ($mdIconProvider) {
        $mdIconProvider.defaultIconSet('img/icons/mdi.svg');
    }])
    .config(['ChartJsProvider', function (ChartJsProvider) {
        ChartJsProvider.setOptions({colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']});
    }])
;

