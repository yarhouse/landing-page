'use strict';

/**
 * @ngdoc overview
 * @name landingPageApp
 * @description
 * # landingPageApp
 *
 * Main module of the application.
 */
angular
  .module('landingPageApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-typed',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl',
        // controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
