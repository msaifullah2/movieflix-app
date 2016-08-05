(function() {
  'use strict';

  angular.module('plunker')
    .controller('DeleteController', DeleteController);

  DeleteController.$inject = ['dataService','$location'];

  function DeleteController(dataService, $location) {
    var deleteVm = this;

    deleteVm.addUser = addUser;
    deleteVm.deleteUser = deleteUser;
    deleteVm.updateUser = updateUser;
    deleteVm.edit = edit;
    deleteVm.changeSort = changeSort;
    deleteVm.submit = submit;

    init();

    function init() {

      deleteVm.sorter = {
        by: 'firstName',
        reverse: false
      };

      dataService.getUsers()
        .then(function(users) {
          deleteVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      deleteVm.sorter.by = prop;
      deleteVm.sorter.reverse = !deleteVm.sorter.reverse;
    }

    function addUser() {
      console.log(deleteVm.newUser);
      dataService.createUser(deleteVm.newUser).then(function(users) {
        deleteVm.users.push(users);
        $location.path('/home');
      }, function(error) {
        console.error(error);
      });
    }

    function deleteUser(id) {
      console.log("Got delete request for:",id);
      dataService.deleteUser(id).then(function (id) {
        deleteVm.users.splice(id,1);
      }, function (error) {
        console.log(error);
      });
    }

    function updateUser() {
      console.log("Got HERE:",deleteVm.newUser, deleteVm.newUser.id);
      dataService.updateUser(deleteVm.newUser, deleteVm.newUser.id).then(function() {
        deleteVm.users = deleteVm.users;
      }, function(error) {
        console.error(error);
      });
    }

    function submit() {
      if(deleteVm.newUser.id == null){
        deleteVm.addUser();
      } else{
        deleteVm.updateUser();
      }

    }

    function edit(id) {
      for(var i=0; i<deleteVm.users.length;i++){
        if(deleteVm.users[i].id === id){
          deleteVm.newUser = angular.copy(deleteVm.users[i]);
          break;
        }

      }
    }


  }

})();
