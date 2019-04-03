'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'peoplePageService', function($scope, peoplePageService) {
  $scope.page = peoplePageService.get(1);
}])

.factory('peoplePageService', ['$resource', function($resource) {
  return $resource('https://swapi.co/api/people/?page=:pageNumber');
}]);