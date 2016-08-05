(function() {
  'use strict';

  angular.module('plunker')
    .controller('MainController', MainController);

  MainController.$inject = ['dataService'];

  function MainController(dataService) {
    var mainVm = this;

    mainVm.addUser = addUser;
    mainVm.deleteUser = deleteUser;
    mainVm.changeSort = changeSort;
    mainVm.mouseEvent = mouseEvent;
    mainVm.hidePopover = hidePopover;

    init();

    function init() {

      mainVm.sorter = {
        by: '-year' ,
        reverse: false

      };

      mainVm.watchedsorter={
        by : '-imdbVotes',
        reverse:false
      };

      mainVm.tvsorter={
        by:'-type',
        reverse:false
      };


      dataService.getUsers()
        .then(function(users) {
          mainVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function hidePopover() {
      mainVm.popoverIsVisible=false;
    };

    function mouseEvent(id) {
      dataService.getUserById(id)
        .then(function (user) {
          mainVm.popoverIsVisible=true;
          console.log("mouse over happened");
          mainVm.user = user;
          console.log(user);
        },function (error) {
          mainVm.popoverIsVisible=false;
          console.log("error");
        })

    };

    function changeSort (prop) {
      mainVm.sorter.by = prop;
      mainVm.sorter.reverse = !mainVm.sorter.reverse;
    }

    function addUser() {
      mainVm.newUser.id = fakeUUID();
      mainVm.users.push(mainVm.newUser);
      mainVm.newUser = null;
    }

    function deleteUser(position) {
      mainVm.users.splice(position, 1);
      console.log(mainVm.users);
    }


    function fakeUUID() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
  }


})();
