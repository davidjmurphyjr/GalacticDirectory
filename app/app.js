'use strict';

angular.module('galacticDirectory', ['ngRoute', 'galacticDirectory.people'])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/people/1'});
    }])

    .controller('LoadingCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.$on('$routeChangeStart', function() {
            $scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            $scope.isRouteLoading = false;
        });
    }]);

