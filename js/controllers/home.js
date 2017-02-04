(function() {
    'use strict'

    angular.module('app')
        .component('home', {
            controller: controller,
            templateUrl: 'js/views/home.html'
        })

    function controller() {
        const vm = this

        vm.$onInit = function() {
            console.log("oninit home");
        }
        vm.goproject = function() {
            console.log("tfyuuhig");
            $state.go('project')
        }
    }


}());
