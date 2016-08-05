(function() {
  'use strict';

  angular.module('plunker')
    .controller('AddController', AddController);

  AddController.$inject = ['dataService','$location'];

  function AddController(dataService, $location) {
    var addVm = this;

    addVm.addUser = addUser;
    addVm.deleteUser = deleteUser;
    addVm.updateUser = updateUser;
    addVm.edit = edit;
    addVm.changeSort = changeSort;
    addVm.submit = submit;

    init();

    function init() {

      addVm.sorter = {
        by: 'firstName',
        reverse: false
      };

      dataService.getUsers()
        .then(function(users) {
          addVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      adminVm.sorter.by = prop;
      adminVm.sorter.reverse = !adminVm.sorter.reverse;
    }

    function addUser() {
      console.log(addVm.newUser);
      dataService.createUser(addVm.newUser).then(function(users) {
        addVm.users.push(users);
        $location.path('/home');
      }, function(error) {
        console.error(error);
      });
    }

    function deleteUser(id) {
      console.log("Got delete request for:",id);
      dataService.deleteUser(id).then(function (id) {
        addVm.users.splice(id,1);
      }, function (error) {
        console.log(error);
      });
    }

    function updateUser() {
      console.log("Got HERE:",addVm.newUser, addVm.newUser.id);
      dataService.updateUser(addVm.newUser, addVm.newUser.id).then(function() {
        addVm.users = addVm.users;
      }, function(error) {
        console.error(error);
      });
    }

    function submit() {
      if(adminVm.newUser.id == null){
        addVm.addUser();
      } else{
        addVm.updateUser();
      }

    }

    function edit(id) {
      for(var i=0; i<addVm.users.length;i++){
        if(addVm.users[i].id === id){
          addVm.newUser = angular.copy(addVm.users[i]);
          break;
        }

      }
    }


  }

})();
