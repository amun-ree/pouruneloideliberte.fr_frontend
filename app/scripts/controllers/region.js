'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:RegionCtrl
 * @description
 * # RegionCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('RegionCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, Regions, Region, CONFIG, angularLoad, Departements, $filter, base64, $locale, $templateCache) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $locale.NUMBER_FORMATS.GROUP_SEP = ' ';
    $templateCache.removeAll();

    $scope.clearData = function() {
    //  $window.location.reload();
  //  $scope = $scope.$new(true);

    };
    $scope.clearData();
      $rootScope.wrapperlayout = 'opac-wrapper';
      $scope.region_id = base64.decode($routeParams.id);
      $scope.getData = function(id) {
        // Call the async method and then do stuff with what is returned inside our own then function
        Region($scope.region_id).success(function(d) {
            Departements($scope.region_id).success(function(data) {

              $scope.region = d.region;
              $scope.departements = data.departements;

              var region = [];
              region = d.region;
              $scope.region_name = region.name;
              $scope.map_name = region.svg_code;
              $scope.shadow_url = CONFIG.STORAGE_URL +'/maps/'+ region.svg_code + '/' + region.svg_code +'_shadow.svg';
              angularLoad.loadScript(region.svg_path).then(function() {
                // Mapael
                var region_map =  document.getElementById('region-map');
                //console.log(region_map.firstChild);
    //  console.log($scope.region_name);
                    $(".mapcontainer").mapael({
                    //  var map_name =  $scope.region_name;


                      map: {
                        // Set the name of the map to display
                        name: $scope.map_name,
                      //  width : 340,
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
                              //console.log($scope.region_id);
                              var url = '#/region/'+ base64.encode($scope.region_id) +'/departement/' + base64.encode(id) ;

                              $window.location = url;
                              $window.location.reload();



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

                            },


                            mouseover: function(e, id, mapElem, textElem){
                              console.log(id);
                          var selected_department =  $filter('GetBySVGCode')('svg_code', id, $scope.departements);

                          if ((selected_department.delegate_id != null) &&  (selected_department != null)) {
                            var delegate = selected_department.delegate[0];

                          }else if (selected_department.delegate_id == null) {
                            var delegate = null;
                          }

                          if (selected_department != null) {
                            var region = document.getElementById('region');
                            region.style.display = 'none'; //or
                            var departementtext = document.getElementById('departement-txt');
                            departementtext.style.display = 'block'; //or
                            var departement = document.getElementById('the_departement');
                            departement.innerText = selected_department['name'];
                           var nb_habitant = document.getElementById('nb-habitant');
                           nb_habitant.innerText = $filter('number')(selected_department['nb_residents']);
                          // nb_habitant.innerText = selected_department['nb_residents'];
                            var prefecture = document.getElementById('prefecture');
                             prefecture.innerText = selected_department['main_city'];
                            var nb_ader = document.getElementById('nb-ader');
                            nb_ader.innerText = $filter('number')(selected_department['nb_admd']);
                            if (delegate != null) {
                              var nom_deleg = document.getElementById('nom-deleg');
                              nom_deleg.innerText = delegate['first_name'] ;
                            }else {
                              var nom_deleg = document.getElementById('nom-deleg');
                              nom_deleg.innerText = ' en attente de confirmation';
                            }
                          }





                            },
                            mouseout: function(){
                              var departementtext = document.getElementById('departement-txt');
                              departementtext.style.display = 'none'; //or
                              var region = document.getElementById('region');
                              region.style.display = 'block'; //or


                            }
                          }

                        },
                        afterInit : function($self, paper, areas, plots, options) {
                          console.log('hello');
                          paper.canvas.setAttribute('preserveAspectRatio', 'XMaxYMid');

                        },
                        beforeInit : function(container, paper, options) {

                        }
                      },
                      defaultPlot : {
                        size:10,
                        attrs: {
                          fill:"0088db",
                          stroke:"0088db",
                          "stroke-width":2

                        }
                      }
                    });
    }).catch(function() {
        // There was some error loading the script. Meh
    });
            //  console.log($scope.shadow_url);


            });

        });
      };
      $scope.getData($scope.region_id);

      $scope.goMobile = function(id){

        var url = '#/region/'+ base64.encode($scope.region_id) +'/departement/' + base64.encode(String(id)) ;

        $window.location = url;
        $window.location.reload();
      }

  });
