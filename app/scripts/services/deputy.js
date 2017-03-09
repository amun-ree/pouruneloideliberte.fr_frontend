'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Deputy
 * @description
 * # Deputy
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .service('Deputy', function ($http) {
    return function(id){
          return $http({
             method: 'GET',
             url: 'http://104.236.115.237/admd-backend/public/api/deputies/' + id
          });

     }  });
