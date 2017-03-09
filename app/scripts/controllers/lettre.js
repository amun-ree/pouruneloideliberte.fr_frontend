'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('LettreCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, CONFIG, angularLoad, $filter, Deputy, Departement, Opinion, Sendmail) {
    $scope.departement_id = $routeParams.departement_id;
    $scope.deputy_id = $routeParams.deputy_id;

    $rootScope.wrapperlayout = 'opac-wrapper';

    Departement($scope.departement_id).success(function(departement_data) {
      $scope.departement = departement_data.departement;

      Deputy($scope.deputy_id).success(function(deputy_data) {
        $scope.deputy = deputy_data.deputy;
        if ($scope.deputy.prefix == 0) {
          $scope.prefix = 'Monsieur le Député';
        }else if ($scope.deputy.prefix == 1) {
          $scope.prefix = 'Madame la Députée';

        }else if ($scope.deputy.prefix == 2) {
          $scope.prefix = 'Monsieur le Ministre';

        }else if ($scope.deputy.prefix == 3) {
          $scope.prefix = 'Madame la Ministre';

        }else if ($scope.deputy.prefix == 4) {
          $scope.prefix = 'Monsieur le Président';

        }else if ($scope.deputy.prefix == 5) {
          $scope.prefix = 'Madame la Présidente';

        }else if ($scope.deputy.prefix == 6) {
          $scope.prefix = ' Monsieur le Premier Ministre';

        }

      });
    });
    $scope.go = function() {
Sendmail($scope.deputy_id).success(function(data_returned) {
  var url = '#/end/' + $scope.deputy_id ;
  $window.location = url;
});



  }

  });
