'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('IndexCtrl', function ($scope, $location, $window, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.wrapperlayout = 'main-wrapper';

  });
