'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Departement
 * @description
 * # Departement
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .service('Sendmail', function ($http) {
    return function(id){
          return $http({
             method: 'post',
             url: 'http://104.236.115.237/admd-backend/public/api/deputies/' + id + '/sendmail',
             data: { senderemail: 'five4omar@gmail.com' }
          });

     }
  });
