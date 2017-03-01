(function() {
    'use strict'

    angular.module('app')
        .component('blog', {
            controller: controller,
            templateUrl: 'js/views/blog.html'
        })

    function controller($state, $http) {
        const vm = this;

        vm.$onInit = function() {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/blog'
            }).then(function successCallback(response) {
                console.log(response);
                vm.posts.push(response)
            }, function errorCallback(response) {
                console.log(response);
            });
        }

        vm.posts = []
    }


}());
