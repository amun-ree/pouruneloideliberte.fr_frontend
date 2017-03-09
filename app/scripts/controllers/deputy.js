'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('DeputyCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, CONFIG, angularLoad, $filter, Deputy, Departement, Opinion, base64) {

// Scope Initialisation
$rootScope.wrapperlayout = 'opac-wrapper';
$scope.deputy_id = $routeParams.id;
$scope.opinion_colors = ['red', 'green','bold','bold']
   $scope.getData = function(id) {
       Deputy($scope.deputy_id).success(function(data) {
        $scope.deputy = data.deputy;
        $scope.circonscription = $scope.deputy.circonscription[0]
        $scope.departement_id = $scope.deputy.circonscription[0].departement_id;
           Departement($scope.departement_id).success(function(departement_data) {
             $scope.departement = departement_data.departement;

           });
           Opinion($scope.deputy_id).success(function(opinion_data) {
             $scope.laws = opinion_data.laws;


           });


       });

   };
   $scope.go = function() {
     var url = '#/lettre/' + $scope.departement_id + '/' + $scope.deputy_id  ;
     $window.location = url;

 }

   $scope.getData($scope.deputy_id);


  });
