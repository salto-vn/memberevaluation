'use strict';
angular.module('memberevaluation.projectquality', [])

    .controller('ProjectQualityController'
        , ['$scope', '$rootScope', '$location', '$stateParams', '$mdColors',
            function ($scope, $rootScope, $location, $stateParams, $mdColors) {
                $rootScope.headerTitle = 'Project Quality - ' + 'Project A';
                $rootScope.isLogin = true;
                $scope.today = new Date();
                $rootScope.currentNavItem = 'Quality';
                var projectId = $stateParams.id;

                //Tracker data TODO: API
                $scope.trackers = [
                    {code: 0, value: 'Task'},
                    {code: 1, value: 'Q&A'},
                    {code: 2, value: 'Bug'},
                ];
                //Status data TODO: API
                $scope.statuses = [
                    {code: 0, value: 'In-Progress'},
                    {code: 1, value: 'Finished'},
                    {code: 2, value: 'Cancel'},
                    {code: 3, value: 'Delay'},
                    {code: 4, value: 'Pending'},
                ];
                //Master data member TODO: API
                $scope.members = [
                    {id: 1, name: 'Ngo A'},
                    {id: 2, name: 'Ngo B'},
                    {id: 3, name: 'Ngo C'},
                    {id: 4, name: 'Ngo D'},
                    {id: 5, name: 'Ngo E'},
                ];

                //Master data prority TODO: API
                $scope.priority = [
                    {code: 1, value: 'Normal'},
                    {code: 2, value: 'High'},
                    {code: 3, value: 'Low'},
                ];
                //BugCause TODO: API
                $scope.bugCauses = [
                    {
                        name: 'Source Version Control',
                        id: 1,
                    },
                    {
                        name: 'Human factors',
                        id: 2
                    },
                    {
                        name: 'Lack of coding exp',
                        id: 3
                    },
                    {
                        name: 'Lack of design exp',
                        id: 4
                    },
                    {
                        name: 'Lack of coding Database',
                        id: 5
                    },
                    {
                        name: 'Last minutes changes',
                        id: 6
                    },
                    {
                        name: 'Miscommunication',
                        ic: 7
                    },
                    {
                        name: 'Code missing requirement',
                        id: 8
                    },
                    {
                        name: 'API, third-party tools',
                        id: 9
                    },
                ];

                //report by
                $scope.reportBy = 'spec';

                // Bug of each Dev TODO: API
                $scope.bugsByDev = [
                    {
                        name: 'Dev A',
                        bugs: [
                            {
                                name: 'Source Version Control',
                                value: 5
                            },
                            {
                                name: 'Human factors',
                                value: 13
                            },
                            {
                                name: 'Lack of coding exp',
                                value: 13
                            },
                            {
                                name: 'Lack of design exp',
                                value: 13
                            },
                            {
                                name: 'Lack of coding Database',
                                value: 5
                            },
                            {
                                name: 'Last minutes changes',
                                value: 5
                            },
                            {
                                name: 'Miscommunication',
                                value: 5
                            },
                            {
                                name: 'Code missing requirement',
                                value: 13
                            },
                            {
                                name: 'API, third-party tools',
                                value: 13
                            },
                        ],
                    },
                    {
                        name: 'Dev B',
                        bugs: [
                            {
                                name: 'Source Version Control',
                                value: 10
                            },
                            {
                                name: 'Human factors',
                                value: 13
                            },
                            {
                                name: 'Lack of coding exp',
                                value: 13
                            },
                            {
                                name: 'Lack of design exp',
                                value: 13
                            },
                            {
                                name: 'Lack of coding Database',
                                value: 40
                            },
                            {
                                name: 'Last minutes changes',
                                value: 30
                            },
                            {
                                name: 'Miscommunication',
                                value: 5
                            },
                            {
                                name: 'Code missing requirement',
                                value: 13
                            }, {
                                name: 'API, third-party tools',
                                value: 13
                            },
                        ],
                    },
                    {
                        name: 'Dev B',
                        bugs: [
                            {
                                name: 'Source Version Control',
                                value: 10
                            },
                            {
                                name: 'Human factors',
                                value: 13
                            },
                            {
                                name: 'Lack of coding exp',
                                value: 13
                            },
                            {
                                name: 'Lack of design exp',
                                value: 13
                            },
                            {
                                name: 'Lack of coding Database',
                                value: 40
                            },
                            {
                                name: 'Last minutes changes',
                                value: 30
                            },
                            {
                                name: 'Miscommunication',
                                value: 55
                            },
                            {
                                name: 'Code missing requirement',
                                value: 13
                            }, {
                                name: 'API, third-party tools',
                                value: 13
                            },
                        ],
                    },
                ];


                //Prepare bug type graph by developer
                //Color of bug on bar
                var colors = ['red', 'cyan', 'yellow', 'purple', 'orange', 'blue', 'teal', 'green', 'brown'];
                var lables = [];
                var datasets = [];
                var databybugs = [];
                var dataset = [];
                angular.forEach($scope.bugCauses, function (k, v) {
                    databybugs.push({name: k.name, datas: new Array()});
                });

                angular.forEach($scope.bugsByDev, function (key, value) {
                    lables.push(key.name);
                    for (var i = 0; i < databybugs.length; i++) {
                        var n = databybugs[i];
                        angular.forEach(key.bugs, function (bugkey, bugvalue) {
                            if (n.name == bugkey.name) {
                                n.datas.push(bugkey.value);
                                databybugs[i] = {name: n.name, datas: n.datas}
                                return;
                            }
                        });
                    }
                });

                var i = 0;
                angular.forEach($scope.bugsByDev[0].bugs, function (k, v) {
                    var color = $mdColors.getThemeColor('default-' + colors[i] + '-300');
                    datasets.push({label: k.name, backgroundColor: color, data: databybugs[i].datas, borderWidth: 0});
                    i++;
                });


                //Project Graph Data
                $scope.hideTypes = [];
                //labels, data, TODO: API
                $scope.project = {
                    remainBugChart: {
                        labels: ["01/12", "02/12", "03/12", "04/12", "05/12", "06/12", "07/12"],
                        series:
                            ['Bugs'],
                        data:
                            [
                                [65, 59, 80, 81, 56, 55, 40],
                            ],
                        datasetOverride:
                            [{yAxisID: 'y-axis-1'}],
                        options:
                            {
                                animation: {
                                    duration: 1000,
                                },
                                elements: {
                                    line: {
                                        tension: 0, // disables bezier curves
                                    }
                                },
                                scales: {
                                    yAxes: [
                                        {
                                            id: 'y-axis-1',
                                            type: 'linear',
                                            display: true,
                                            position: 'left',
                                            scaleLabel: {
                                                display: true,
                                                labelString: 'Number of Bug'
                                            },
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        },
                                    ],
                                    xAxes: [
                                        {
                                            id: 'x-axis-1',
                                        },
                                    ],
                                },

                            }
                        ,
                        colors: ['#2379c9'],
                        projectName: 'Project A'
                    },
                    bugTypePieChart: {
                        labels: ['Source Version Control', 'Human factors', 'Lack of coding exp'
                            , 'Lack of design exp', 'Lack of coding Database', 'Last minutes changes'
                            , 'Miscommunication', 'Code missing requirement', 'API, third-party tools'],
                        data: [350, 450, 100, 10, 450, 100, 30, 450, 100],
                        options: {
                            animation: {
                                duration: 2000,
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                fullWidth: false,
                                labels: {
                                    boxWidth: 30
                                }
                            },
                        },
                        pieGraphColors: ['#66BB6A', '#29B6F6', '#26A69A', '#ff2f2f', '#795548', '#FF7043', '#F9A825', '#1E88E5', '#673AB7']
                    },
                    reportByPieChart: {
                        labels: ['Tester', 'Leader', 'Customer', 'Self'],
                        data: [100, 30, 450, 100],
                        options: {
                            animation: {
                                duration: 2000,
                            },
                            legend: {
                                display: true,
                                position: 'bottom',
                            },
                            pieceLabel: {
                                render: 'value',
                                arc: true,
                                position: 'border',
                                fontColor: '#ffffff'
                            }
                        },
                        pieGraphColors: ['#66BB6A', '#1E88E5', '#FF7043', '#673AB7']
                    },
                    bugBySpecBarChart: {
                        labels: ["Spec A", "Spec B", "Spec C", "Spec D"],
                        data: [
                            [''], [''], [''], ['']
                        ],
                        //Override data, don't use default data
                        datasetOverride: [
                            {
                                label: "Total Bug",
                                backgroundColor: $mdColors.getThemeColor('default-cyan-300-1'),
                                borderWidth: 0,
                                data: [408, 547, 675, 734]
                            },
                            {
                                label: "Remaining Bugs",
                                backgroundColor: $mdColors.getThemeColor('default-red-300-1'),
                                borderWidth: 0,
                                data: [133, 221, 783, 2478]
                            }, {
                                label: "Total Pages",
                                backgroundColor: $mdColors.getThemeColor('default-brown-300-1'),
                                borderWidth: 0,
                                data: [408, 547, 675, 734]
                            },
                            {
                                label: "Bug per Page",
                                backgroundColor: $mdColors.getThemeColor('default-green-300-1'),
                                borderWidth: 0,
                                data: [408, 547, 675, 734]
                            },
                        ],
                        options: {
                            legend: {
                                display: true
                            },
                            animation: {
                                duration: 2000,
                            },
                            scales: {
                                xAxes: [
                                    {
                                        id: 'x-axis-1',
                                        display: true,
                                        labelString: 'Number of Bug',
                                    },
                                ],
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        ticks: {
                                            beginAtZero: true,
                                        }
                                    },
                                ]
                            }
                        },
                    },
                    bugByModuleBarChart: {
                        labels: ["Module A", "Module B", "Module C", "Module D", "Module E", "Module A", "Module B", "Module C", "Module D", "Module E"],
                        data: [
                            ['']
                        ],

                        //Override data, don't use default data
                        datasetOverride: [
                            {
                                label: "Number of bug by Module",
                                backgroundColor: $mdColors.getThemeColor('default-red-300-1'),
                                borderWidth: 0,
                                data: [133, 21, 73, 27, 133, 21, 73, 27, 133, 21]
                            }
                        ],
                        options: {
                            legend: {
                                display: true
                            },
                            animation: {
                                duration: 2000,
                            },
                            scales: {
                                xAxes: [
                                    {
                                        id: 'x-axis-1',
                                        display: true,
                                        labelString: 'Number of Bug',
                                    },
                                ],
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        ticks: {
                                            beginAtZero: true,
                                        }
                                    },
                                ]
                            }
                        },
                    },
                    bugByDevBarChart:
                        {
                            labels: lables,
                            data:
                                [
                                    [''], [''], [''], [''], [''], [''], [''], [''], [''],
                                ],
                            //Override data, don't use default data
                            datasetOverride:
                            datasets,
                            options:
                                {
                                    legend: {
                                        position: 'bottom',
                                        display:
                                            true,
                                        onClick:

                                            function (e, legendItem) {
                                                var index = legendItem.datasetIndex;
                                                var ci = this.chart;
                                                var meta = ci.getDatasetMeta(index);
                                                if (!legendItem.hidden) {
                                                    $scope.hideTypes.push(legendItem.text);
                                                } else {
                                                    var index = $scope.hideTypes.indexOf(legendItem.text);
                                                    $scope.hideTypes.splice(index, 1);
                                                }

                                                // See controller.isDatasetVisible comment
                                                meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

                                                // We hid a dataset ... rerender the chart
                                                ci.update();

                                            }

                                        ,
                                    }
                                    ,
                                    animation: {
                                        duration: 2000,
                                    }
                                    ,
                                    scales: {
                                        xAxes: [
                                            {
                                                id: 'x-axis-1',
                                            },
                                        ],
                                        yAxes:
                                            [
                                                {
                                                    id: 'y-axis-1',
                                                    ticks: {
                                                        beginAtZero: true,
                                                        stepSize: 5,
                                                        suggestedMin: 0,
                                                        suggestedMax: 50
                                                    }
                                                },
                                            ]
                                    }
                                }
                            ,
                        }
                    ,
                }
                ;

                $scope.chartOnClick = function (points, evt) {
                    console.log(points, evt);
                };

                //Open a ticket
                $scope.openTicket = function (ticket) {
                    console.log(ticket);
                    $rootScope.go('/ticket/' + ticket.id);
                }

            }]);
