'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('EndDepCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, CONFIG, angularLoad, $filter, Deputy, Departement, Opinion, base64, Sendmailnumber) {
    $rootScope.wrapperlayout = 'main-wrapper';
    $scope.deputy_id = $routeParams.id;
   Deputy($scope.deputy_id).success(function(data) {
      $scope.deputy = data.deputy;
      Sendmailnumber().success(function(d) {
        $scope.number = d.sentmail;


  });

});


  });
