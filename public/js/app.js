(function() {
  'use strict';

  angular
  .module('Epictetus', ['angular-jwt',  'ngResource', 'ngMessages', 'ui.router','ui.materialize', 'chart.js'])
  .constant('API', 'http://localhost:3000/api')
  .constant('APP_NAME', 'Epictetus')
  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.interceptors.push('authInterceptor');

    // If a route other than status is requested,
    // go to the auth route
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './js/views/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: './js/views/login.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: './js/views/signup.html'
      })
      .state('today', {
        url: '/today',
        templateUrl: './js/views/today.html'
      })
      .state('progress', {
        url: '/progress',
        templateUrl: './js/views/progress.html'
      })
  });
})();