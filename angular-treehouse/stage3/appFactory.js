angular.module('treehouseCourse', [])
  .controller('stageThreeCtrl', function ($scope, People) {
    $scope.people = People.get();

    $scope.newPerson = {};

    $scope.save = function (person) {
      People.save(person);
    }

    $scope.add = function (newPerson) {
      People.add(newPerson);
      $scope.newPerson = {};
    }

    $scope.remove = function (person) {
      People.remove(person);
    }
  })
  .factory('People', function () {
    var people = [];

    return {
      get: function () {
        return people;
      },
      add: function (person) {
        people.push(person);
      },
      remove: function (person) {
        people.splice(people.indexOf(person), 1)
      },
      save: function (person) {

      }
    }
  })