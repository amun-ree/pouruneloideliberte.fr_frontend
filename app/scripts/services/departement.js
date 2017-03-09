'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Departement
 * @description
 * # Departement
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .service('Departement', function ($http) {
    return function(id){
          return $http({
             method: 'GET',
             url: 'http://104.236.115.237/admd-backend/public/api/departements/' + id
          });

     }
  });
