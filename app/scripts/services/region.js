'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Region
 * @description
 * # Region
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
.factory('Region', function($http) {

return function(id){
      return $http({
         method: 'GET',
         url: 'http://104.236.115.237/admd-backend/public/api/regions/' + id,
        params: { id: id }
      });

 }
});
