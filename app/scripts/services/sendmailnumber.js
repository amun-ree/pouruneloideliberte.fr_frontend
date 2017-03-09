'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Departement
 * @description
 * # Departement
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .service('Sendmailnumber', function ($http) {
    return function(id){
          return $http({
             method: 'get',
             url: 'http://104.236.115.237/admd-backend/public/api/sendmail',

          });

     }
  });
