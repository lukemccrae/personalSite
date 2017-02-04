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
            }


}());
