(function() {
    'use strict'

    angular.module('app')
        .component('project', {
            controller: controller,
            templateUrl: 'js/views/project.html'
        })

    function controller() {
        const vm = this

        vm.$onInit = function() {
            console.log("oninit project");
        }
        vm.projects = [{
                name: "Local Scavenge",
                image_url: 'images/localscavenge.png',
                description: "Local Scavenge creates a unique scavenger hunt experience incorporating dynamic, real-world data.",
                github: "https://github.com/lukemccrae/Local-Scavenge",
                deployed: "https://localscavenge-52af4.firebaseapp.com/"
            },
            {
                name: "Spot Ninja",
                image_url: "images/spotninja.png",
                description: "The solution for your parking woes. Spot Ninja displays user submitted data about free parking as a heatmap, along with links to paid parking options in the area. It allows users to log in and save their spots, as well as submit information about free parking. Parking will never be the same!",
                github: "https://github.com/lukemccrae/Spot-NinjaFrontEnd",
                deployed: "https://spot-ninja.firebaseapp.com/"
            },
            {
                name: "Secret Skate",
                image_url: "images/secretskate.jpg",
                description: "A user driven app that allows skaters to view secret skating spots as well as record their tricks. Videos will populate the map where users can view the location and up vote the coolest trick.",
                github: "https://github.com/SecretSkate/secretskateFrontEnd2",
                deployed: ""
            }
        ]
    }


}());
