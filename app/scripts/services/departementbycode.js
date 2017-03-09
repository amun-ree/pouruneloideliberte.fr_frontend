'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.DepartementByCode
 * @description
 * # DepartementByCode
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
.factory('DepartementByCode', function($http) {

return function(id, code){
      return $http({
         method: 'GET',
         url: 'http://104.236.115.237/admd-backend/public/api/regions/' + id + '/departements/' + code
      });

 }
});
