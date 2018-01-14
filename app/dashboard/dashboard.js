'use strict';
angular.module('memberevaluation.dashboard', ['memberevaluation.menus'])

    .controller('DashboardController'
        , ['$scope', '$rootScope', '$location', '$mdSidenav', '$mdUtil', '$timeout', 'MenuService',
            function ($scope, $rootScope, $location, $mdSidenav, $mdUtil, $timeout, MenuService) {

                $rootScope.lockLeft = true;
                $rootScope.isLogin = true;
                $scope.today = new Date();

                //Data Graph projects
                $scope.pieGraphOptions = {
                    cutoutPercentage: 80
                }

                //Task project
                $scope.taskProjects = [
                    {
                        labels: ['Finished', 'In-Progress', 'Delay'],
                        data: [350, 450, 100],
                        projectName: 'Wedding A',
                        status: 'warning',
                        pieGraphColors: ['#1bc98d', '#1ca8dd', '#d2691e']
                    },
                    {
                        labels: ['Finished', 'In-Progress', 'Delay'],
                        data: [350, 450, 100],
                        projectName: 'Wedding B',
                        status: 'dangerous',
                        pieGraphColors: ['#1bc98d', '#1ca8dd', '#d2691e']
                    },
                    {
                        labels: ['Finished', 'In-Progress', 'Delay'],
                        data: [350, 450, 100],
                        projectName: 'Wedding C',
                        status: 'normal',
                        pieGraphColors: ['#1bc98d', '#1ca8dd', '#d2691e']
                    },
                ]


                //Release Project
                $scope.releaseProjects = [
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project A",
                    },
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project B",
                    },
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project C",
                    }
                ];

                //Delay Project
                $scope.delayProjects = [
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project A",
                    },
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project B",
                    },
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project C",
                    }
                ];

                //upcomming vents
                $scope.upcommingEvents = [
                    {
                        date: "01/12",
                        projectImg: "img/logo.png",
                        title: "Project A",
                        detail: "Project A release 22"
                    },
                    {
                        date: "01/12",
                        projectImg: "img/logo.png",
                        title: "Project B",
                        detail: "Project A release 22"
                    },
                    {
                        date: "01/12",
                        projectImg: "img/logo.png",
                        title: "Project C",
                        detail: "Project A release 22"
                    },
                ];

                //Project Progress Chart
                $scope.burndownCharts = [
                    {
                        labels: ["01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12"],
                        series: ['Series A', 'Series B'],
                        data: [
                            [65, 59, 80, 81, 56, 55, 40],
                            [28, 48, 40, 19, 86, 27, 90]
                        ],
                        datasetOverride: [{yAxisID: 'y-axis-1'}],
                        options: {
                            animation:{
                                duration:5000,
                            },
                            scales: {
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        type: 'linear',
                                        display: true,
                                        position: 'left'
                                    },
                                ]
                            }
                        },
                        colors: ['#1bc98d', '#dd3409'],
                        projectName: 'Project A'
                    },
                    {
                        labels: ["01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12"],
                        series: ['Series A', 'Series B'],
                        data: [
                            [65, 59, 80, 81, 56, 55, 40],
                            [28, 48, 40, 19, 86, 27, 90]
                        ],
                        datasetOverride: [{yAxisID: 'y-axis-1'}],
                        options: {
                            animation:{
                                duration:5000,
                            },
                            scales: {
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        type: 'linear',
                                        display: true,
                                        position: 'left'
                                    },
                                ]
                            }
                        },
                        colors: ['#1bc98d', '#dd3409'],
                        projectName: 'Project B'
                    },
                    {
                        labels: ["01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12"],
                        series: ['Series A', 'Series B'],
                        data: [
                            [65, 59, 80, 81, 56, 55, 40],
                            [28, 48, 40, 19, 86, 27, 90]
                        ],
                        datasetOverride: [{yAxisID: 'y-axis-1'}],
                        options: {
                            animation:{
                                duration:5000,
                            },
                            scales: {
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        type: 'linear',
                                        display: true,
                                        position: 'left'
                                    },
                                ]
                            }
                        },
                        colors: ['#1bc98d', '#dd3409'],
                        projectName: 'Project C'
                    },
                ];
                $scope.burndownChartOnClick = function (points, evt) {
                    console.log(points, evt);
                };


                //Evaluation chart
                $scope.barCharts = [
                    {
                        labels: ['Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G'],
                        series: ['Coding Skill', 'Test Skill','Design Skill'],
                        data: [
                            [5, 10, 20, 10, 56, 35, 40],
                            [5, 12, 40, 14, 3, 17, 10],
                            [5, 43, 40, 5, 6, 17, 40]
                        ],
                        options: {
                            animation:{
                                duration:5000,
                            },
                            scales: {
                                xAxes: [
                                    {
                                        stacked: true,
                                        gridLines:{
                                            display:false
                                        }
                                    },
                                ],
                                yAxes: [
                                    {
                                        stacked: true,
                                        ticks:{
                                            beginAtZero:true,
                                            steps: 10,
                                            stepValue: 5,
                                            max: 100
                                        }
                                    },
                                ]
                            },
                        },
                        datasetOverride: [
                            {borderWidth: 0}, {borderWidth: 0}, {borderWidth: 0},
                        ],
                        colors: ['#ddda29', '#dd3401', '#00dd02'],
                        quater: 'Quater 1'
                    },
                    {
                        labels: ['Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G'],
                        series: ['Coding Skill', 'Test Skill','Design Skill'],
                        data: [
                            [5, 10, 20, 10, 56, 35, 40],
                            [5, 12, 40, 14, 3, 17, 10],
                            [5, 43, 40, 5, 6, 17, 40]
                        ],
                        options: {
                            animation:{
                                duration:5000,
                            },
                            scales: {
                                xAxes: [
                                    {
                                        stacked: true,
                                        gridLines:{
                                            display:false
                                        }
                                    },
                                ],
                                yAxes: [
                                    {
                                        stacked: true,
                                        ticks:{
                                            beginAtZero:true,
                                            steps: 10,
                                            stepValue: 5,
                                            max: 100
                                        }
                                    },
                                ]
                            },
                        },
                        datasetOverride: [
                            {borderWidth: 0}, {borderWidth: 0}, {borderWidth: 0},
                        ],
                        colors: ['#ddda29', '#dd3401', '#00dd02'],
                        quater: 'Quater 2'
                    },
                ];
            }]);
