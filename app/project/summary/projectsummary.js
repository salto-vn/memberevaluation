'use strict';
angular.module('memberevaluation.projectsummary', [])

    .controller('ProjectSummaryController'
        , ['$scope', '$rootScope', '$location','$stateParams',
            function ($scope, $rootScope, $location,$stateParams) {
                $rootScope.headerTitle = 'Project Home - ' + 'Project A';
                $rootScope.isLogin = true;
                $scope.today = new Date();
                $scope.currentNavItem = 'Home';

                var projectId= $stateParams.id;
                console.log(projectId);
                $scope.trackers = [
                    {code: 0, value: 'Task'},
                    {code: 1, value: 'Q&A'},
                    {code: 2, value: 'Bug'},
                ];
                $scope.statuses = [
                    {code: 0, value: 'In-Progress'},
                    {code: 1, value: 'Finished'},
                    {code: 2, value: 'Cancel'},
                    {code: 3, value: 'Delay'},
                    {code: 4, value: 'Pending'},
                ];


                //Project Graph Data
                $scope.project = {
                    state: 0,
                    burndownchart: {
                        labels: ["01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12"],
                        series:
                            ['Series A', 'Series B'],
                        data:
                            [
                                [65, 59, 80, 81, 56, 55, 40],
                                [28, 48, 40, 19, 86, 27, 90]
                            ],
                        datasetOverride:
                            [{yAxisID: 'y-axis-1'}],
                        options:
                            {
                                responsive: true,
                                animation: {
                                    duration: 3000,
                                }
                                ,
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
                            }
                        ,
                        colors: ['#1bc98d', '#dd6f4e'],
                        projectName:
                            'Project A'
                    },
                    pieChart: [
                        {
                            labels: ['Finished', 'In-Progress', 'Delay', 'New'],
                            data: [350, 450, 100, 10],
                            name: 'Task',
                            pieGraphColors: ['rgb(27,201,141,1)', 'rgb(27,201,141,0.8)', 'rgb(27,201,141,0.6)', 'rgb(27,201,141,0.4)']
                        },
                        {
                            labels: ['Finished', 'In-Progress', 'Delay', 'New'],
                            data: [350, 450, 100, 10],
                            name: 'Bug',
                            pieGraphColors: ['rgb(28,106,221,1)', 'rgb(28,106,221,0.8)', 'rgb(28,106,221,0.6)', 'rgb(28,106,221,0.4)']
                        },
                        {
                            labels: ['Finished', 'In-Progress', 'Delay', 'New'],
                            data: [350, 450, 100, 10],
                            name: 'QA',
                            pieGraphColors: ['rgb(210,103,30,1)', 'rgb(210,103,30,0.8)', 'rgb(210,103,30,0.6)', 'rgb(210,103,30,0.4)']
                        }
                    ],
                    pieGraphOptions: {
                        cutoutPercentage: 70
                    }
                }
                ;
                $scope.burndownChartOnClick = function (points, evt) {
                    console.log(points, evt);
                };

                //Master data member
                $scope.members  = [
                        {id:1,name:'Ngo A'},
                        {id:2,name:'Ngo B'},
                        {id:3,name:'Ngo C'},
                        {id:4,name:'Ngo D'},
                        {id:5,name:'Ngo E'},
                    ];

                //Master data prority
                $scope.priority  = [
                    {code:1,value:'Normal'},
                    {code:2,value:'High'},
                    {code:3,value:'Low'},
                ];

                //table page for ticket
                $scope.selected = [];
                $scope.query = {
                    order: 'status',
                    limit: 5,
                    page: 1
                };
                $scope.filter = {
                    search: '',
                    tracker: '',
                    status: 'Delay',
                    title:'',
                    createDate:''
                }

                //Ticket data
                $scope.tickets = {
                    count: 6,
                    data: [
                        {
                            id: 1,
                            tracker: {code: 0, value: 'Task'},
                            status: {code: 0, value: 'Delay'},
                            title: 'Create A',
                            assignTo: 'Ngo A',
                            priority: 'High',
                            createDate: '2018/12/12'
                        },
                        {
                            id: 2,
                            tracker: {code: 1, value: 'Q&A'},
                            status: {code: 0, value: 'In-Progress'},
                            title: 'Create A',
                            assignTo: 'Ngo A',
                            priority: 'High',
                            createDate: '1/22/2018'
                        },
                        {
                            id: 3,
                            tracker: {code: 0, value: 'Task'},
                            status: {code: 0, value: 'In-Progress'},
                            title: 'Create A',
                            assignTo: 'Ngo A',
                            priority: 'High',
                            createDate: '2017/12/12'
                        }
                        ,
                        {
                            id: 4,
                            tracker: {code: 1, value: 'Q&A'},
                            status: {code: 1, value: 'Finished'},
                            title: 'Create A',
                            assignTo: 'Ngo A',
                            priority: 'High',
                            createDate: '2017/12/12'
                        },
                        {
                            id: 5,
                            tracker: {code: 0, value: 'Bug'},
                            status: {code: 1, value: 'Finished'},
                            title: 'Create A',
                            assignTo: 'Ngo A',
                            priority: 'High',
                            createDate: '2017/12/12'
                        },
                        {
                            id: 6,
                            tracker: {code: 0, value: 'Task'},
                            status: {code: 4, value: 'Pending'},
                            title: 'Create A',
                            assignTo: 'Ngo A',
                            priority: 'High',
                            createDate: '2017/12/12'
                        }

                    ]
                };

                $scope.getTickets = function () {
                    $scope.ticket = $scope.tickets;
                };

                $scope.logOrder = function (order) {
                    console.log('order by:' + order);
                }

                //Open a ticket
                $scope.openTicket = function(ticket) {
                    console.log(ticket);
                    $rootScope.go('/ticket/'+ticket.id);
                }


            }]);
