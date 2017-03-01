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
        vm.goproject = function($state) {
            console.log("tfyuuhig");
            $state.go('project')
        }

        vm.contents = [{
            name: 'luke McCrae',
            image_url: 'https://s3-us-west-2.amazonaws.com/quilt-production/logo/2016/11/mNEkn0J2uKc77AZR1D.png'
        }]
    }


}());
