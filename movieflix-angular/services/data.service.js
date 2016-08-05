(function() {
  'use strict';

  angular.module('plunker')
    .service('dataService', dataService);

  dataService.$inject = ['$http', '$q'];

  function dataService($http, $q) {

    var self = this;

    self.getUsers = getUsers;
    self.getUserById = getUserById;
    self.createUser = createUser;
    self.deleteUser = deleteUser;

    function getUsers() {
      return $http.get('http://localhost:8080/spring-rest/api/movieinfo')
        .then(successFn, errorFn);
    }

    function getUserById(id) {
      return $http.get('http://localhost:8080/spring-rest/api/movieinfo/' + id)
        .then(successFn, errorFn);
    }

    function createUser(user) {
      console.log("User Service:",user);
      return $http.post('http://localhost:8080/spring-rest/api/movieinfo',user)
        .then(successFn,errorFn);
    }

    function deleteUser(id) {
      return $http.delete('http://localhost:8080/spring-rest/api/movieinfo/'+id)
        .then(successFn,errorFn);
    }
    

    function successFn(response) {
      return response.data;
    }

    function errorFn(response) {
      return $q.reject('ERROR: ' + response.statusText);
    }
  }

})();
