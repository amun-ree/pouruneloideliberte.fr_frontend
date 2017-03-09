'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.DeputyLaws
 * @description
 * # DeputyLaws
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .service('DeputyLaws', function ($http) {
    return function(id){
          return $http({
             method: 'GET',
             url: 'http://104.236.115.237/admd-backend/public/api/deputies/' + id + 'laws'
          });

     }    });
