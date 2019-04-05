'use strict';

angular.module('galacticDirectory.people', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/people/:pageNumber', {
            templateUrl: 'people/peoplePage.html',
            controller: 'PeoplePageCtrl',
            resolve: {
                peoplePage: ['$route', '$http', function ($route, $http) {
                    return $http.get('https://swapi.co/api/people/?page=' + $route.current.params.pageNumber);
                }]
            }
        });
    }])

    .controller('PeoplePageCtrl', ['$scope', '$routeParams', 'peoplePage', function ($scope, $routeParams, peoplePage) {
        var mapPageUrl = function (url) {
            return url.replace("https://swapi.co/api/people/?page=", "#!/people/");
        };
        $scope.peoplePage = peoplePage.data;
        $scope.next = $scope.peoplePage.next && mapPageUrl($scope.peoplePage.next);
        $scope.previous = $scope.peoplePage.previous && mapPageUrl($scope.peoplePage.previous);
        $scope.pageNumber = $routeParams.pageNumber;
        $scope.numberOfPages = Math.ceil($scope.peoplePage.count / 10);
    }])

    .component('personMaster', {
        templateUrl: 'people/personMaster.html',
        bindings: {person: '<'}
    })

    .component('personDetails', {
        templateUrl: 'people/personDetails.html',
        bindings: {person: '<'}
    });