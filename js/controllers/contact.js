(function() {
    'use strict'

    angular.module('app')
        .component('contact', {
            controller: controller,
            templateUrl: 'js/views/contact.html'
        })

    function controller($state) {
        const vm = this

        vm.$onInit = function() {
            console.log("contact oninit");
        }
    }


}());
