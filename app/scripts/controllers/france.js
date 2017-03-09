'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('FranceCtrl', function ($scope, $http, $location, $window, $rootScope, Regions, base64) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.wrapperlayout = 'opac-wrapper';

    var regions = [];

$scope.clearData = function() {
  $scope.data = {};
};
$scope.getData = function() {
  // Call the async method and then do stuff with what is returned inside our own then function
  Regions.async().then(function(d) {
    $scope.regions = d.regions;
    var regions = [];
    regions = d.regions;
    // Mapael

        $(".mapcontainer").mapael({
          map: {
            // Set the name of the map to display
            name: "france_regions",
            defaultArea: {

              attrs: {

                stroke: "#0a1e3d",
                fill: "#fff",

                "stroke-width": 2

              },

              attrsHover: {

                "stroke-width": 1,
                "fill": "#d0021b"

              },
              eventHandlers: {
                click: function (e, id, mapElem, textElem) {
                  var newData = {
                    'areas': {}
                  };

                  var url = '#/region/' + base64.encode(id) ;
                  $window.location = url;
                //  $location.url('/departement');


                  /*if (mapElem.originalAttrs.fill == "#fff") {
                   newData.areas[id] = {
                   attrs: {
                   fill: "#0088db"
                   }
                   };
                   } else {
                   newData.areas[id] = {
                   attrs: {
                   fill: "#fff"
                   }
                   };
                   }*/
                  $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                  //$scope.changeRegion(id);
                  var region = document.getElementById('the_region');
                  region.innerText = regions[id-1].name;

                },
                mouseover: function(e, id, mapElem, textElem){
                  //console.log(id);

                  var region = document.getElementById('the_region');
                  region.style.display = 'block'; //or

                  region.innerText = regions[id-1].name;
                  //console.log(regions[id-1]);
                },
                mouseout: function(){
                  var region = document.getElementById('the_region');
                  region.style.display = 'none'; //or
                  region.innerText = '';


                }
              }

            }
          }
        });


  });
};

$scope.getData();
$scope.goMobile = function(id){

  var theurl = '#/region/' + base64.encode(String(id)) ;

  $window.location = theurl;
}


    /*var regions = [];
    regions[1] = "Some region 1";
    regions[2] = "Some region 2";
    regions[3] = "Some region 3";
    regions[4] = "Some region 4";
    regions[5] = "Some region 5";
    regions[6] = "Some region 6";
    regions[7] = "Some region 7";
    regions[8] = "Some region 8";
    regions[9] = "Some region 9";
    regions[10] = "Some region 10";
    regions[11] = "Some region 11";
    regions[12] = "Some region 12";*/
  //  regions[50] = "centre-val de loire";






  });
