'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Departement
 * @description
 * # Departement
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .service('Sendmailback', function ($http) {


    return function(id, formdata){

          return $http({
             method: 'post',
             url: 'http://104.236.115.237/admd-backend/public/api/deputies/' + id + '/sendmailback',
             data: { law1: formdata.law1, law2 : formdata.law2 }
          });

     }
  });
