/**
 * Created by mohammed saif on 8/3/2016.
 */
(function() {
  'use strict';

  angular.module('plunker')
    .controller('EditController', EditController);

  EditController.$inject = ['dataService','$location'];

  function EditController(dataService, $location) {
    var editVm = this;

    editVm.addUser = addUser;
    editVm.deleteUser = deleteUser;
    editVm.updateUser = updateUser;
    editVm.edit = edit;
    editVm.changeSort = changeSort;
    editVm.submit = submit;

    init();

    function init() {


      dataService.getUsers()
        .then(function(users) {
          editVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      editVm.sorter.by = prop;
      editVm.sorter.reverse = !editVm.sorter.reverse;
    }

    function addUser() {
      console.log(editVm.newUser);
      dataService.createUser(editVm.newUser).then(function(users) {
        editVm.users.push(users);
        $location.path('/home');
      }, function(error) {
        console.error(error);
      });
    }

    function deleteUser(id) {
      console.log("Got delete request for:",id);
      dataService.deleteUser(id).then(function (id) {
        editVm.users.splice(id,1);
      }, function (error) {
        console.log(error);
      });
    }

    function updateUser() {
      console.log("Got HERE:",editVm.newUser, editVm.newUser.id);
      dataService.updateUser(editVm.newUser, editVm.newUser.id).then(function() {
        editVm.users = editVm.users;
      }, function(error) {
        console.error(error);
      });
    }

    function submit() {
      if(editVm.newUser.id == null){
        editVm.addUser();
      } else{
        editVm.updateUser();
      }

    }

    function edit(id) {
      for(var i=0; i<editVm.users.length;i++){
        if(editVm.users[i].id === id){
          editVm.newUser = angular.copy(editVm.users[i]);
          break;
        }

      }
    }


  }

})();
