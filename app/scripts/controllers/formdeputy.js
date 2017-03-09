'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('FormCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, CONFIG, angularLoad, $filter, Deputy, Departement, Opinion, base64, Sendmailnumber, Sendmailback) {
    $rootScope.wrapperlayout = 'main-wrapper';
   $scope.deputy_id = $routeParams.id;
    Deputy($scope.deputy_id).success(function(data) {
      $scope.deputy = data.deputy;
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
$scope.formData = {

  law1: 'pour',
  law2 : 'pour'
};
$scope.go = function() {
Sendmailback($scope.deputy_id, $scope.formData).success(function(data_returned) {
var url = '#/enddeputy/' + $scope.deputy_id ;
$window.location = url;
});



}
  });
