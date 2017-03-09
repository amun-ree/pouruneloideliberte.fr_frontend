'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
 angular.module('admdFrontendApp')
   .controller('DepartementCtrl', function ($scope, $http, $location, $window, $rootScope, $routeParams, Regions, Region, CONFIG, angularLoad, Departements, $filter, DepartementByCode, base64, $locale, $templateCache) {
     this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];
     $templateCache.removeAll();

     $locale.NUMBER_FORMATS.GROUP_SEP = ' ';
       $rootScope.wrapperlayout = 'opac-wrapper';
       $scope.parisdelegates_name = [ 'Rémi Chauvet' , 'Annie Gautrat', 'Rémi Chauvet', 'Mireille de Mun', 'Edith', 'Edith Deyris', 'Jacqueline Jencquel', 'Jacqueline Jencquel', 'Mathieu Hervé-Barrouyer', 'Rémi Chauvet', 'Dominique	Barthélémy', 'Jean-Luc Romero', 'Michelle Annie	Copin', 'En attente de nomination', 'François	Wellhoff', 'Jacqueline Jencquel', 'Jacqueline Jencquel', 'Jean-Pierre	Vinas', 'Sophie Grassano', 'Sophie Grassano' ];
       $scope.parisdelegates_email = [ 'admd.paris1@admd.net' , 'admd.paris2@admd.net', 'admd.paris3@admd.net', 'admd.paris4@admd.net', 'admd.paris5@admd.net', 'admd.paris6@admd.net', 'admd.paris7@admd.net', 'admd.paris8@admd.net', 'admd.paris9@admd.net', 'admd.paris10@admd.net', 'admd.paris11@admd.net', 'admd.paris12@admd.net', 'admd.paris13@admd.net', 'admd.paris14@admd.net', 'admd.paris15@admd.net', 'admd.paris16@admd.net', 'admd.paris17@admd.net', 'admd.paris18@admd.net', 'admd.paris19@admd.net', 'admd.paris20@admd.net' ];

       $scope.parisdelegates = [
         {
           name : "Rémi Chauvet",
           email: "admd.paris1@admd.net"
         },
         {
           name : "Annie Gautrat",
           email: "admd.paris2@admd.net"
         },
         {
           name : "Rémi Chauvet",
           email: "admd.paris3@admd.net"
         },
         {
           name : "en attente de nomination",
           email: "admd.paris4@admd.net"
         },
         {
           name : "Edith Deyris",
           email: "admd.paris5@admd.net"
         },
         {
           name : "Edith Deyris",
           email: "admd.paris6@admd.net"
         },
         {
           name : "Jacqueline Jencquel",
           email: "admd.paris7@admd.net"
         },
         {
           name : "Jacqueline Jencquel",
           email: "admd.paris8@admd.net"
         },
         {
           name : "Mathieu Hervé-Barrouyer",
           email: "admd.paris9@admd.net"
         },
         {
           name : "Rémi Chauvet",
           email: "admd.paris10@admd.net"
         },
         {
           name : "Dominique	Barthélémy",
           email: "admd.paris11@admd.net"
         },
         {
           name : "Jean-Luc Romero",
           email: "admd.paris12@admd.net"
         },
         {
           name : "Michelle Annie	Copin",
           email: "admd.paris13@admd.net"
         },
         {
           name : "en attente de nomination",
           email: "admd.paris14@admd.net"
         },
         {
           name : "François	Wellhoff",
           email: "admd.paris15@admd.net"
         },
         {
           name : "Jacqueline Jencquel",
           email: "admd.paris16@admd.net"
         },
         {
           name : "Jacqueline Jencquel",
           email: "admd.paris17@admd.net"
         },
         {
           name : "Jean-Pierre	Vinas",
           email: "admd.paris18@admd.net"
         },
         {
           name : "Sophie Grassano",
           email: "admd.paris19@admd.net"
         },
         {
           name : "Sophie Grassano",
           email: "admd.paris20@admd.net"
         }

       ];
$scope.selected_delegate = $scope.parisdelegates[0].email;

$scope.encoded_region_id =  $routeParams.id;
  $scope.region_id = base64.decode($routeParams.id);
  $scope.departement_code = base64.decode($routeParams.code);


       $scope.getData = function(id) {
         // Call the async method and then do stuff with what is returned inside our own then function
             DepartementByCode($scope.region_id, $scope.departement_code).success(function(data) {
               $scope.departement = data.departement;
               if ($scope.departement.id == 75) {
                 $scope.paris = true;

               }else {
                 $scope.paris = false;
               }
               $scope.nb_res = $filter('number')(data.departement['nb_residents']);
               $scope.nb_ad = $filter('number')(data.departement['nb_admd']);

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
