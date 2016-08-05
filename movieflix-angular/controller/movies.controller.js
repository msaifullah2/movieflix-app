/**
 * Created by mohammed saif on 7/28/2016.
 */
(function() {
  'use strict';

  angular.module('plunker')
    .controller('MoviesController', MoviesController);

  MoviesController.$inject = ['dataService'];

  function MoviesController(dataService) {
    var movieVm = this;



    movieVm.changeSort = changeSort;

    init();

    function init() {



      movieVm.moviesorter={
        by:'-imdbRating',
        reverse:false
      };


      dataService.getUsers()
        .then(function(users) {
          movieVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      movieVm.sorter.by = prop;
      movieVm.sorter.reverse = !mainVm.sorter.reverse;
    }


  }


})();
