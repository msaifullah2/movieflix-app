(function() {
  'use strict';

  angular.module('plunker', ['ngRoute','ngCookies']).config(moduleConfig).run(run);

  moduleConfig.$inject = ['$routeProvider', '$locationProvider'];

  function moduleConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.tmpl.html',
        controller: 'MainController',
        controllerAs: 'mainVm'
      })
      .when('/genre', {
        templateUrl: 'views/genre.tmpl.html',
        controller: 'GenreController',
        controllerAs: 'genreVm'
      })
      .when('/tvseries', {
      templateUrl: 'views/tvseries.tmpl.html',
      controller: 'TvSeriesController',
      controllerAs: 'tvseriesVm'
    })
      .when('/movies', {
      templateUrl: 'views/movies.tmpl.html',
      controller: 'MoviesController',
      controllerAs: 'movieVm'
    })
      .when('/register', {
        templateUrl: 'views/register.tmpl.html',
        controller: 'UsersController',
        controllerAs: 'registerVm'
      })
      .when('/addmovies', {
        templateUrl: 'views/admin.add.html',
        controller: 'AddController',
        controllerAs: 'addVm'
      })
      .when('/deletemovies', {
        templateUrl: 'views/admin.delete.html',
        controller: 'DeleteController',
        controllerAs: 'deleteVm'
      })
      .when('/updatemovies', {
        templateUrl: 'views/admin.edit.html',
        controller: 'EditController',
        controllerAs: 'editVm'
      })
      .when('/login', {
        templateUrl: 'views/login.tmpl.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo:'/register'
      });
  }
  run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
  function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

  }


  })();
