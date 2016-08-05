/**
 * Created by mohammed saif on 7/28/2016.
 */
/**
 * Created by mohammed saif on 7/28/2016.
 */
(function() {
  'use strict';

  angular.module('plunker')
    .controller('GenreController', GenreController);

  GenreController.$inject = ['dataService'];

  function GenreController(dataService) {
    var genreVm = this;



    genreVm.changeSort = changeSort;

    init();

    function init() {



      genreVm.genresorter={
        by:'-imdbRating',
        reverse:false
      };


      dataService.getUsers()
        .then(function(users) {
          genreVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      genreVm.sorter.by = prop;
      genreVm.sorter.reverse = !genreVm.sorter.reverse;
    }


  }


})();
