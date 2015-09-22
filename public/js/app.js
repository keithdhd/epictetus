(function() {
  'use strict';

  angular
  .module('Epictetus', ['angular-jwt',  'ngResource', 'ngMessages', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .constant('APP_NAME', 'Epictetus')
  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.interceptors.push('authInterceptor');

    // If a route other than status is requested,
    // go to the auth route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('authorize', {
        url: '/authorize',
        templateUrl: './js/views/authorize.html'
      })
      .state('display', {
        url: '/display',
        templateUrl: './js/views/display.html'
      })
  });
})();