angular.module('treehouseCourse', [])
  .controller('stageOneCtrl', function ($scope, $http) {
    $http.get('people.json').success(function(people) {
      $scope.people = people;
    });
  });