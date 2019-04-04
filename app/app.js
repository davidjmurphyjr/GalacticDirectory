'use strict';

angular.module('galacticDirectory', ['ngRoute', 'galacticDirectory.people'])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/people/1'});
    }]);

