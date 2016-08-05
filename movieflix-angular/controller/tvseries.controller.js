/**
 * Created by mohammed saif on 7/28/2016.
 */
(function() {
  'use strict';

  angular.module('plunker')
    .controller('TvSeriesController', TvSeriesController);

  TvSeriesController.$inject = ['dataService'];

  function TvSeriesController(dataService) {
    var tvseriesVm = this;



    tvseriesVm.changeSort = changeSort;

    init();

    function init() {



      tvseriesVm.tvsorter={
        by:'-imdbRating',
        reverse:false
      };


      dataService.getUsers()
        .then(function(users) {
          tvseriesVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      tvseriesVm.sorter.by = prop;
      tvseriesVm.sorter.reverse = !mainVm.sorter.reverse;
    }


  }


})();
