'use strict';
angular.module('memberevaluation.projectmembers', [])

    .controller('ProjectMembersController'
        , ['$scope', '$rootScope', '$location', '$stateParams', '$mdColors',
            function ($scope, $rootScope, $location, $stateParams, $mdColors) {
                $rootScope.headerTitle = 'Project Members - ' + 'Project A';
                $rootScope.isLogin = true;
                $scope.today = new Date();
                $rootScope.currentNavItem = 'Member';
                var projectId = $stateParams.id;

                $scope.filter = {
                    freeword: ''
                }
                //table page for ticket
                $scope.selected = [];
                $scope.query = {
                    order: 'id',
                    limit: 10,
                    page: 1
                };

                //Master data member TODO: API
                $scope.members = [
                    {
                        id: '0001',
                        name: 'Ngo A',
                        role: 'Developer',
                        point: '20',
                        email: 'test@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 5,
                    },
                    {
                        id: '0002',
                        name: 'Ngo Van Nam',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0004',
                        name: 'Nguyen Cong Phuong',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0003',
                        name: 'Doan Van Hau',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0003',
                        name: 'Doan Van Hau',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0003',
                        name: 'Doan Van Hau',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0003',
                        name: 'Doan Van Hau',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0003',
                        name: 'Doan Van Hau',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                    {
                        id: '0003',
                        name: 'Doan Van Hau',
                        role: 'Developer',
                        point: '20',
                        email: 'test1@gmail.com',
                        tasks: 10,
                        qas: 5,
                        bugs: 10,
                        projects: [
                            {id: 1, name: 'Project Name 1'},
                            {id: 2, name: 'Project Name 2'},
                            {id: 3, name: 'Project Name 3'},
                        ],
                        star: 4,
                    },
                ];

                $scope.ratings = [{
                    current: 4,
                    max: 5
                }];

                //Open a ticket
                $scope.openMember = function (member) {
                    console.log(member);
                    $rootScope.go('/member/' + member.id);
                }

            }]);
