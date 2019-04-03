'use strict';

angular.module('galacticDirectory.people', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/people/:pageNumber', {
    templateUrl: 'people/people.html',
    controller: 'PeopleCtrl'
  });
}])

.controller('PeopleCtrl', ['$routeParams', '$scope', 'peoplePageService', function($routeParams, $scope, peoplePageService) {
  peoplePageService.get($routeParams.pageNumber).then(function(response) {
    $scope.page = response.data;
  });
}])

.factory('peoplePageService', ['$http', function($http) {
  return {
    get: function (pageNumber) {
      return $http.get('https://swapi.co/api/people/?page=' + pageNumber);
    }
  };
}]);