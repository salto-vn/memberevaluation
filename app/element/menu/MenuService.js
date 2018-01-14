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
            id: '001',
            name: 'Dashboard',
            icon: 'view-dashboard'
        },
        {
            id: '002',
            name: 'Member',
            icon: 'account-multiple'
        },
        {
            id: '003',
            name: 'Project',
            icon: 'domain'
        },
        {
            id: '004',
            name: 'Ticket',
            icon: 'ticket'
        },
        {
            id: '005',
            name: 'Working Time',
            icon: 'clock'
        },
        {
            id: '006',
            name: 'Planning&Schedule',
            icon: 'calendar-text'
        },
        {
            id: '007',
            name: 'Evaluation',
            icon: 'certificate'
        },
        {
            id: '008',
            name: 'Setting',
            icon: 'img/icons/ic_people_24px.svg'
        },
    ];

    this.getAllMenus = function () {
        return menus;
    }

}