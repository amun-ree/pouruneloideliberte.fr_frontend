'use strict';

/**
 * @ngdoc function
 * @name admdFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the admdFrontendApp
 */
angular.module('admdFrontendApp')
  .controller('CirconscriptionCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(function() {


      var some = "www";

      var regions = [];
      regions[1] = "circonscription 2";
      regions[2] = "circonscription 1";
      regions[3] = "circonscription 3";
      regions[4] = "circonscription 4";
      regions[5] = "";


      var changeRegion = function(id){
        //  var region = document.getElementById('the_region');
        //  region.innerText = regions[id];
      }

      $(".mapcontainer").mapael({
        map: {
          // Set the name of the map to display
          name: "circonscriptions",
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


                window.location = "#/deputy";


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
                changeRegion(id);

              },
              mouseover: function(e, id, mapElem, textElem){
                changeRegion(id);
                var selector1 = '.re-Circonscription-'+String(id)+' span';
                var selector2 = '.re-Circonscription-'+String(id)+' span:first-of-type';
                console.log(selector1);

                $(String(selector1)).css("font-weight", "bold");
                $(String(selector2)).addClass("text-red");
              },
              mouseout: function(e, id, mapElem, textElem){
                changeRegion(5);
                var selector1 = '.re-Circonscription-'+String(id)+' span';
                var selector2 = '.re-Circonscription-'+String(id)+' span:first-of-type';
                $(selector1).css("font-weight", "normal");
                $(selector2).removeClass("text-red");
              }
            }

          }
        },
        areas: {
          "1": {
            text: {content: "2", attrs: {"font-size": 20, "font-weight":"bold", "fill":"#0a1f3d"}}
          },
          "2": {
            text: {content: "1", attrs: {"font-size": 20, "font-weight":"bold", "fill":"#0a1f3d"}}
          },
          "3": {
            text: {content: "3", attrs: {"font-size": 20, "font-weight":"bold", "fill":"#0a1f3d"}}
          },
          "4": {
            text: {content: "4", attrs: {"font-size": 20, "font-weight":"bold", "fill":"#0a1f3d"}}
          },
        }
      });
    });

  });
