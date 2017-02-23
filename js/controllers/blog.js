(function() {
    'use strict'

    angular.module('app')
        .component('blog', {
            controller: controller,
            templateUrl: 'js/views/blog.html'
        })

    function controller() {
        const vm = this

        vm.$onInit = function() {
            console.log("oninit blog");
        }
        vm.posts = [{
            title: 'Tutorial: Making an Insult Bot With Raspberry Pi',
            content: 'First this then that then the other thing',
            image_url: 'https://www.adafruit.com/includes/templates/adafruit2013/images/little_pi.png'
        }]
    }


}());
