'use strict';

/**
 * @ngdoc filter
 * @name admdFrontendApp.filter:Underscore
 * @function
 * @description
 * # Underscore
 * Filter in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .filter('UnderScore', function () {
    return function (input) {
       return input.replace(/-/g, '_');
   };
  });
