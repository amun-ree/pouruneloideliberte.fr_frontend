'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Departements
 * @description
 * # Departements
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
.factory('Departements', function($http) {

return function(id){
      return $http({
         method: 'GET',
         url: 'http://104.236.115.237/admd-backend/public/api/regions/' + id + '/departements'
      });

 }
});
