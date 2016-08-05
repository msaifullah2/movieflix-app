(function() {
  'use strict';

  angular.module('plunker')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['userService','$location'];

  function UsersController(userService, $location) {
    var registerVm = this;

    registerVm.addUser = addUser;
    registerVm.deleteUser = deleteUser;
    registerVm.updateUser = updateUser;
    registerVm.edit = edit;
    registerVm.changeSort = changeSort;
    registerVm.submit = submit;

    init();

    function init() {

      registerVm.sorter = {
        by: 'firstName',
        reverse: false
      };

      userService.getUsers()
        .then(function(users) {
          registerVm.users = users;
        }, function(error) {
          console.error(error);
        });
    }

    function changeSort (prop) {
      registerVm.sorter.by = prop;
      registerVm.sorter.reverse = !registerVm.sorter.reverse;
    }

    function addUser() {
      console.log(registerVm.newUser);
      userService.createUser(registerVm.newUser).then(function(users) {
        registerVm.users.push(users);
        $location.path('/login');
      }, function(error) {
        console.error(error);
      });
    }

    function deleteUser(id) {
      console.log("Got delete request for:",id);
      userService.deleteUser(id).then(function (id) {
        registerVm.users.splice(id,1);
      }, function (error) {
        console.log(error);
      });
    }

    function updateUser() {
      console.log("Got HERE:",registerVm.newUser, registerVm.newUser.id);
      userService.updateUser(registerVm.newUser, registerVm.newUser.id).then(function() {
        registerVm.users = registerVm.users;
      }, function(error) {
        console.error(error);
      });
    }

    function submit() {
      if(registerVm.newUser.id == null){
        registerVm.addUser();
      } else{
        registerVm.updateUser();
      }

    }

    function edit(id) {
      for(var i=0; i<registerVm.users.length;i++){
        if(registerVm.users[i].id === id){
          registerVm.newUser = angular.copy(registerVm.users[i]);
          break;
        }

      }
    }


  }

})();
