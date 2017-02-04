(function() {
    'use strict'

    angular.module('app')
        .component('splash', {
            controller: controller,
            templateUrl: 'js/views/splash.html'
        })

    function controller($state) {
        const vm = this

        vm.$onInit = function() {
            console.log("splash oninit");
        }

        vm.goHome = function(house) {
            console.log(" go home");
            $state.go('home')
        }
    }


}());
