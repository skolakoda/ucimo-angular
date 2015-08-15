angular.module('treehouseCourse', [])
  .controller('stageTwoCtrl', function ($scope) {
    $scope.user = {
      name: "world",
      email: "alex@mrvdot.com",
      age: 25,
      active: false,
      role: "anonymous"
    };
  });