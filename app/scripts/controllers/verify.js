'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
 angular.module('admdFrontendApp')
   .controller('VerifyCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, Regions, Region, CONFIG, angularLoad, Departements, $filter, DepartementByCode, base64, $locale, $templateCache) {
     this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];
     $templateCache.removeAll();

     $locale.NUMBER_FORMATS.GROUP_SEP = ' ';

       $rootScope.wrapperlayout = 'opac-wrapper';

$scope.encoded_region_id =  $routeParams.id;
  $scope.region_id = base64.decode($routeParams.id);
  $scope.departement_code = base64.decode($routeParams.code);


       $scope.getData = function(id) {
         // Call the async method and then do stuff with what is returned inside our own then function
             DepartementByCode($scope.region_id, $scope.departement_code).success(function(data) {
               $scope.departement = data.departement;
               $scope.nb_res = $filter('number')(data.departement['nb_residents']);
               $scope.circonscriptions = data.departement.circonscriptions;
               if ($scope.departement.delegate_id != null) {
                 $scope.delegate = $scope.departement.delegate[0];

               }
              // $scope.departement.svg_code;
               $scope.map_name = $filter('UnderScore')($scope.departement.svg_code);
               $scope.shadow_url = CONFIG.STORAGE_URL +'/maps/departements/'+ $scope.departement.svg_code + '/' + $scope.departement.svg_code +'_shadow.svg';
         angularLoad.loadScript($scope.departement.svg_path).then(function() {
                 // Mapael
                 var baseSetTooltip = $.mapael.prototype.setTooltip;
                 $.mapael.prototype.setTooltip = function(elem){
                     // Save ref to Mapael object in self
                     var self = this;
                     // Some special processing for "path" element having a tooltip
                     if (elem.type === "path") {
                         elem.attrsHover.fill = "#FF0000";
                     }
                     // Call base Mapael function
                     baseSetTooltip.call(self, elem);
                 };
                 var $mapcontainer2 = $(".circ-mapcontainer");

                     $mapcontainer2.mapael({


                       map: {
                         name: $scope.map_name,
                         defaultArea: {

                           attrs: {

                             stroke: "#0a1e3d",
                             fill: "#fff",

                             "stroke-width": 1

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
                               var selected_circonscription =  $filter('GetBySVGCode')('svg_code', id, $scope.circonscriptions);
                               var deputy_id = selected_circonscription.deputy[0].id;
                               var url = '#/deputy/' + deputy_id ;
                               $window.location = url;
                             //  $location.url('/departement');



                               $(".circ-mapcontainer").trigger('update', [{mapOptions: newData}]);

                             },


                             mouseover: function(e, id, mapElem, textElem){

                               var selected_circonscription =  $filter('GetBySVGCode')('svg_code', id, $scope.circonscriptions);
                               var selector1 = '.re-Circonscription-'+String(selected_circonscription.order)+' span:last-of-type';
                               var selector2 = '.re-Circonscription-'+String(selected_circonscription.order)+' span:first-of-type';

                                 $(String(selector1)).css("font-weight", "bold");
                                 $(String(selector2)).addClass("text-red");
                                 $(String(selector1)).addClass("text-red");



                             },
                             mouseout: function(e, id, mapElem, textElem){

                               var selector1 = '.re-Circonscription-'+String(id)+' span:last-of-type';
                               var selector2 = '.re-Circonscription-'+String(id)+' span:first-of-type';
                               $(selector1).css("font-weight", "normal");
                               $(selector2).removeClass("text-red");
                               $(selector1).removeClass("text-red");

                             }
                           }

                         },
                         afterInit : function($self, paper, areas, plots, options) {
                           paper.canvas.setAttribute('preserveAspectRatio', 'XMaxYMid');
                           console.log($self);
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







             });


       };
       $scope.getData($scope.region_id);


       $scope.getData($scope.region_id);
       $scope.goTo = function(id) {
         var url = '#/deputy/' + id  ;
         $window.location = url;


     }
     $scope.goToRegion = function(encoded_region_id) {
       var url = '#/region/' + encoded_region_id  ;

       $window.location = url;
       $window.location.reload();


   }
   $scope.changeColor = function(order) {
  var x = $('[data-id="'+order+'"]');
  x.mouseover();
}
$scope.RechangeColor = function(order) {
var x = $('[data-id="'+order+'"]');
x.mouseout();
}

   });
