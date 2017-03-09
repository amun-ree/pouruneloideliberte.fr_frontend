'use strict';

/**
 * @ngdoc filter
 * @name admdFrontendApp.filter:GetBySVGCode
 * @function
 * @description
 * # GetBySVGCode
 * Filter in the admdFrontendApp.
 */
angular.module('admdFrontendApp')
  .filter('GetBySVGCode', function () {
    return function(propertyName, propertyValue, collection) {
          var i=0, len=collection.length;
          for (; i<len; i++) {
              if (collection[i][propertyName] == propertyValue) {
                  return collection[i];
              }
          }
          return null;
      }
  });
