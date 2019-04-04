'use strict';

angular.module('galacticDirectory.people', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/people/:pageNumber', {
    templateUrl: 'people/peoplePage.html',
    controller: 'PeoplePageCtrl'
  });
}])

.controller('PeoplePageCtrl', ['$routeParams', 'peoplePageService', function($routeParams, peoplePageService) {
  this.mapPageUrl = function (url) {
    url.replace("https://swapi.co/api/people/?page=", "#!/people/");
  };

  peoplePageService.get($routeParams.pageNumber).then((function(response) {
    this.peoplePage = response.data;
  }).bind(this));
}])

.factory('peoplePageService', ['$http', function($http) {
  return {
    get: function (pageNumber) {
      return $http.get('https://swapi.co/api/people/?page=' + pageNumber);
    }
  };
}])

.component('personMaster', {
  templateUrl: 'people/personMaster.html',
  bindings: {
    person: '<'
  }
})

.component('personDetails', {
  templateUrl: 'people/personDetails.html',
  bindings: {
    person: '<'
  }
});