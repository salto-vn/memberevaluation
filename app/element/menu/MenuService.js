'use strict'
angular.module('memberevaluation.menus',[])
    .service('MenuService', MenuService);

/**
 * Menu service using to call Menu API
 * @constructor
 */
function MenuService() {
    var menus = [
        {
            id: '000',
            name: 'Dashboard',
            icon: 'view-dashboard',
            url:'/dashboard'
        },
        {
            id: '001',
            name: 'Home',
            icon: 'home',
            url:'/summary'

        },
        {
            id: '002',
            name: 'Member',
            icon: 'account-multiple',
            url:'/member'
        },
        {
            id: '003',
            name: 'Project',
            icon: 'domain',
            url:'/project'
        },
        {
            id: '004',
            name: 'Ticket',
            icon: 'ticket',
            url:'/project'
        },
        {
            id: '005',
            name: 'Working Time',
            icon: 'clock',
            url:'/workingtime'
        },
        {
            id: '006',
            name: 'Planning&Schedule',
            icon: 'calendar-text',
            url:'/schedule'
        },
        {
            id: '007',
            name: 'Evaluation',
            icon: 'certificate',
            url:'/evaluation'
        },
        {
            id: '008',
            name: 'Setting',
            icon: 'settings',
            url:'/setting'
        },
    ];

    this.getAllMenus = function () {
        return menus;
    }

}