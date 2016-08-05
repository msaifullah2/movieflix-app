(function () {
  'use strict';

  angular
    .module('plunker')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', 'AuthenticationService'];
  function LoginController($location, AuthenticationService) {
    var vm = this;

    vm.login = login;

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();

    function login() {
      AuthenticationService.Login(vm.username, vm.password, function (response) {
        if (response.success) {
          console.log("hellooo");

        } else {
          console.log("error");
          $location.path('/home');
        }
      });
    };
  }

})();
