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
                image_url: 'https://tinyurl.com/p37nzwl',
                description: "scavenger hunt app",
                github: "https://github.com/lukemccrae/Local-Scavenge",
                deployed: "https://localscavenge-52af4.firebaseapp.com/"
            },
            {
                name: "Spot Ninja",
                image_url: "https://tinyurl.com/p37nzwl",
                description: "Free parking app",
                github: "https://github.com/lukemccrae/Local-Scavenge",
                deployed: "https://localscavenge-52af4.firebaseapp.com/"
            }
        ]
    }


}());
