(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    //
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $stateProvider
            .state({
                name: 'splash',
                url: '/',
                component: 'splash',
            })
            .state({
                name: 'home',
                url: '/home',
                component: 'home',
            })
            .state({
                name: 'project',
                url: '/project',
                component: 'project',
            })
            .state({
                name: 'post',
                url: '/blog/post/:id',
                component: 'post',
            })
            .state({
                name: 'contact',
                url: '/contact',
                component: 'contact',
            })
            .state({
                name: 'blog',
                url: '/blog',
                component: 'blog',
            })
    }
}());
