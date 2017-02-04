(function() {
    'use strict'

    angular.module('app')
        .component('post', {
            controller: controller,
            templateUrl: 'js/views/post.html'
          })
            function controller() {
              const vm = this

              vm.$onInit = function() {
                console.log("oninit post");
              }
            }


}());
