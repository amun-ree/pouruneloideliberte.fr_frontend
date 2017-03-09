'use strict';

/**
 * @ngdoc service
 * @name admdFrontendApp.Regions
 * @description
 * # Regions
 * Service in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .factory('Regions', function($http) {
  var promise;
  var Regions = {
    async: function() {
      if ( !promise ) {
        // $http returns a promise, which has a then function, which also returns a promise
        promise = $http.get('http://104.236.115.237/admd-backend/public/api/regions').then(function (response) {
          // The then function here is an opportunity to modify the response
          //console.log(response.data);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return Regions;
});
