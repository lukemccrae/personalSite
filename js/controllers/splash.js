(function() {
    'use strict'

    angular.module('app')
        .component('home', {
            controller: controller,
            templateUrl: 'js/views/home.html'
        })

    function controller($state) {
        const vm = this;

        vm.$onInit = function() {
            console.log("oninit home");
        }
        vm.goHome = function($state) {
            console.log("tfyuuhig");
            $state.go('project')
        }
    }


}());
