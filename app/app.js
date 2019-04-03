'use strict';

// Declare app level module which depends on views, and core components
angular.module('galacticDirectory', [
  'ngRoute',
  'galacticDirectory.people',
  'myApp.view2',
  'myApp.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/people/1'});
}]);
