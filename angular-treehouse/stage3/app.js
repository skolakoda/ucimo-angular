angular.module('treehouseCourse', [])
  .controller('stageThreeCtrl', function ($scope, $http) {
    $scope.people = [];

    $http.get('people.json').success(function(response) {
      $scope.people = response;
    });

    $scope.save = function (person) {
      $http.post('people.json', person)
        .success(function () {
          alert('successfully saved');
        });
    }
  });