'use strict';
angular.module('memberevaluation.dashboard', ['memberevaluation.menus'])

    .controller('DashboardController'
        , ['$scope', '$rootScope', '$location', '$mdSidenav', '$mdUtil', '$timeout', 'MenuService',
            function ($scope, $rootScope, $location, $mdSidenav, $mdUtil, $timeout, MenuService) {

                $rootScope.headerTitle = 'Dashboard';
                $rootScope.isLogin = true;
                $scope.today = new Date();
                //Data Graph projects
                $scope.pieGraphOptions = {
                    cutoutPercentage: 70
                }

                //Task project
                $scope.progressProjects = [
                    {
                        progress:'80%',
                        delay:0,
                        projectName: 'Wedding A',
                        daysDue:'10',
                        status: 'warning',
                        color: '#41c9b5'
                    },
                    {
                        progress:'80%',
                        delay:0,
                        projectName: 'Wedding D',
                        daysDue:'10',
                        status: 'warning',
                        color: '#1ca8dd'
                    },
                    {
                        progress:'80%',
                        delay:0,
                        projectName: 'Wedding B',
                        daysDue:'10',
                        status: 'dangerous',
                        color: '#d2691e'
                    },
                    {
                        progress:'90%',
                        delay:10,
                        projectName: 'Wedding C',
                        daysDue:'3',
                        status: 'normal',
                        color: '#41c9b5'
                    },
                ]


                //Release Project
                $scope.releaseProjects = [
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project A",
                        id:'001',
                    },
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project B",
                        id:'003',
                    },
                    {
                        projectImg: "img/noimage.png",
                        projectName: "Project C",
                        id:'002',
                    }
                ];

                //Delay Project
                $scope.myTasks = [
                    {
                        title: "Task A",
                        id:'002',
                        priority:'High'
                    },
                    {
                        title: "Task B",
                        id:'002',
                        priority:'High'
                    },
                    {
                        title: "Task C",
                        id:'002',
                        priority:'High'
                    },
                    {
                        title: "Task C",
                        id:'002',
                        priority:'Normal'
                    },
                    {
                        title: "Task C",
                        id:'002',
                        priority:'Normal'
                    },
                    {
                        title: "Task C",
                        id:'002',
                        priority:'Normal'
                    },
                    {
                        title: "Task C",
                        id:'002',
                        priority:'Low'
                    },
                    {
                        title: "Task C",
                        id:'002',
                        priority:'Low'
                    }
                ];

                //upcomming vents
                $scope.upcommingEvents = [
                    {
                        date: "01/12",
                        projectImg: "img/logo.png",
                        title: "Project A",
                        detail: "Project A release 22",
                        id: 1
                    },
                    {
                        date: "01/12",
                        projectImg: "img/logo.png",
                        title: "Project B",
                        detail: "Project A release 22",
                        id: 1
                    },
                    {
                        date: "01/12",
                        projectImg: "img/logo.png",
                        title: "Project C",
                        detail: "Project A release 22",
                        id: 1
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
                                        position: 'left',
                                        ticks : {
                                            beginAtZero:true
                                        }
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
                                        position: 'left',
                                        ticks : {
                                            beginAtZero:true
                                        }
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
                                        position: 'left',
                                        ticks : {
                                            beginAtZero:true
                                        }
                                    },
                                ]
                            }
                        },
                        colors: ['#1bc98d', '#dd3409'],
                        projectName: 'Project C'
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
                                        position: 'left',
                                        ticks : {
                                            beginAtZero:true
                                        }
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
                        labels: ['Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G','Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G','Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G'],
                        // series: ['Coding Skill', 'Test Skill','Design Skill'],
                        data: [[''], [''], ['']],
                        options: {
                            legend:{
                              display:true,
                            },
                            animation:{
                                duration:3000,
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
                            {
                                label: "Coding Skill",
                                backgroundColor: 'rgba(62,149,205,1)',
                                borderWidth:1,
                                borderColor:'rgba(62,149,205,0.5)',
                                data: [5, 10, 20, 10, 56, 35, 40,5, 10, 20, 10, 56, 35, 40,5, 10, 20, 10, 56, 35, 40]
                            }, {
                                label: "Test Skill",
                                backgroundColor: "#dd6f4e",
                                borderColor:"rgba(221,111,78,0.5)",
                                borderWidth:1,
                                data: [5, 12, 40, 14, 3, 17, 10,5, 12, 40, 14, 3, 17, 10,5, 12, 40, 14, 3, 17, 10]
                            },
                            {
                                label: "Design Skill",
                                backgroundColor: "#29c094",
                                borderColor:"#29c094",
                                borderWidth:1,
                                data: [5, 43, 40, 5, 6, 17, 40,5, 12, 40, 14, 3, 17, 10,5, 12, 40, 14, 3, 17, 10]
                            },
                        ],
                        quater: 'Quater 1'
                    },
                    // {
                    //     labels: ['Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G'],
                    //     series: ['Coding Skill', 'Test Skill','Design Skill'],
                    //     data: [
                    //         [5, 10, 20, 10, 56, 35, 40],
                    //         [5, 12, 40, 14, 3, 17, 10],
                    //         [5, 43, 40, 5, 6, 17, 40]
                    //     ],
                    //     options: {
                    //         animation:{
                    //             duration:5000,
                    //         },
                    //         scales: {
                    //             xAxes: [
                    //                 {
                    //                     stacked: true,
                    //                     gridLines:{
                    //                         display:false
                    //                     }
                    //                 },
                    //             ],
                    //             yAxes: [
                    //                 {
                    //                     stacked: true,
                    //                     ticks:{
                    //                         beginAtZero:true,
                    //                         steps: 10,
                    //                         stepValue: 5,
                    //                         max: 100
                    //                     }
                    //                 },
                    //             ]
                    //         },
                    //     },
                    //     datasetOverride: [
                    //         {borderWidth: 0}, {borderWidth: 0}, {borderWidth: 0},
                    //     ],
                    //     colors: ['#ddda29', '#dd3401', '#00dd02'],
                    //     quater: 'Quater 2'
                    // },
                    // {
                    //     labels: ['Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G'],
                    //     series: ['Coding Skill', 'Test Skill','Design Skill'],
                    //     data: [
                    //         [5, 10, 20, 10, 56, 35, 40],
                    //         [5, 12, 40, 14, 3, 17, 10],
                    //         [5, 43, 40, 5, 6, 17, 40]
                    //     ],
                    //     options: {
                    //         animation:{
                    //             duration:5000,
                    //         },
                    //         scales: {
                    //             xAxes: [
                    //                 {
                    //                     stacked: true,
                    //                     gridLines:{
                    //                         display:false
                    //                     }
                    //                 },
                    //             ],
                    //             yAxes: [
                    //                 {
                    //                     stacked: true,
                    //                     ticks:{
                    //                         beginAtZero:true,
                    //                         steps: 10,
                    //                         stepValue: 5,
                    //                         max: 100
                    //                     }
                    //                 },
                    //             ]
                    //         },
                    //     },
                    //     datasetOverride: [
                    //         {borderWidth: 0}, {borderWidth: 0}, {borderWidth: 0},
                    //     ],
                    //     colors: ['#ddda29', '#dd3401', '#00dd02'],
                    //     quater: 'Quater 3'
                    // },
                    // {
                    //     labels: ['Dev A', 'Dev B', 'Dev C', 'Dev D', 'Dev E', 'Dev F', 'Dev G'],
                    //     series: ['Coding Skill', 'Test Skill','Design Skill'],
                    //     data: [
                    //         [5, 10, 20, 10, 56, 35, 40],
                    //         [5, 12, 40, 14, 3, 17, 10],
                    //         [5, 43, 40, 5, 6, 17, 40]
                    //     ],
                    //     options: {
                    //         animation:{
                    //             duration:5000,
                    //         },
                    //         scales: {
                    //             xAxes: [
                    //                 {
                    //                     stacked: true,
                    //                     gridLines:{
                    //                         display:false
                    //                     }
                    //                 },
                    //             ],
                    //             yAxes: [
                    //                 {
                    //                     stacked: true,
                    //                     ticks:{
                    //                         beginAtZero:true,
                    //                         steps: 10,
                    //                         stepValue: 5,
                    //                         max: 100
                    //                     }
                    //                 },
                    //             ]
                    //         },
                    //     },
                    //     datasetOverride: [
                    //         {borderWidth: 0}, {borderWidth: 0}, {borderWidth: 0},
                    //     ],
                    //     colors: ['#ddda29', '#dd3401', '#00dd02'],
                    //     quater: 'Quater 4'
                    // },
                ];

                //open project
                $scope.openProject = function (project){
                    $rootScope.go('/project/'+project.id+'/summary');
                }
            }]);
