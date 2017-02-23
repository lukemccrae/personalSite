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

        vm.contacts = [{
                title: "linkedin",
                image_url: "/images/linkedin.png",
                link: "https://www.linkedin.com/in/lukemccrae/",
                name: "Luke McCrae"
            },
            {
                title: "gitHub",
                image_url: "/images/github.jpg",
                link: "https://github.com/lukemccrae",
                name: "lukemccrae"
            },
            {
                title: "email",
                image_url: "/images/email.jpeg",
                link: "mailto:lukemccrae@gmail.com",
                name: "lukemccrae@gmail.com"
            },
            {
                title: "phone",
                image_url: "/images/phonebig.jpg",
                link: "tel:+1-303-499-7111",
                name: "(719) 639-4921"
            }
        ]
    }
}());
