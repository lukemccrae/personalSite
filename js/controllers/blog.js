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
            }


}());
