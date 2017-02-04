(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    //
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $stateProvider
            .state({
                name: 'splash-name',
                url: '/',
                component: 'splash',
            })
            .state({
                name: 'home-name',
                url: '/home',
                component: 'home',
            })
            .state({
                name: 'project',
                url: '/project/:id',
                component: 'project',
            })
            .state({
                name: 'blog',
                url: '/blog',
                component: 'blog',
            })
            .state({
                name: 'post',
                url: '/blog/post/:id',
                component: 'post',
            })
    }
}());
