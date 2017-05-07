'use strict';

/**
 * @ngdoc overview
 * @name admdFrontendApp
 * @description
 * # admdFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('admdFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ab-base64',
    'uz.mailto',
    'angularLoad'
  ])
  .constant("CONFIG", {
       "API_URL": "http://104.236.115.237/admd-backend/public/api",
       "STORAGE_URL": "http://104.236.115.237/storage"
   })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'IndexCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/france', {
        templateUrl: 'views/france.html',
        controller: 'FranceCtrl'
      })
      .when('/region/:id/departement/:code', {
        templateUrl: 'views/departements.html',
        controller: 'DepartementCtrl'
      })
      .when('/circonscription', {
        templateUrl: 'views/circonscriptions.html',
        controller: 'CirconscriptionCtrl'
      })
      .when('/deputy/:id', {
        templateUrl: 'views/deputies.html',
        controller: 'DeputyCtrl'
      })
      .when('/lettre/:departement_id/:deputy_id', {
        templateUrl: 'views/lettre.html',
        controller: 'LettreCtrl'
      })
      .when('/end/:id', {
        templateUrl: 'views/end.html',
        controller: 'EndCtrl'
      })
      .when('/region/:id', {
        templateUrl: 'views/region.html',
        controller: 'RegionCtrl',
        controllerAs: 'region'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'VerifyCtrl',
        controllerAs: 'verify'
      })
      .when('/formdeputy/:id', {
        templateUrl: 'views/formdeputy.html',
        controller: 'FormCtrl',
        controllerAs: 'formdeputy'
      })
      .when('/enddeputy/:id', {
        templateUrl: 'views/enddeputy.html',
        controller: 'EndDepCtrl',
        controllerAs: 'enddep'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
