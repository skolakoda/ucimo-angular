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
  .factory('People', function ($http) {
    var people = [];

    return {
      get: function () {
        if (people.length == 0) {
          $http.get('people.json')
            .success(function (response) {
              for (var i = 0, ii = response.length; i < ii; i++) {
                people.push(response[i]);
              }
            })
            .error(function (err) {
              alert('ERROR: ' + err)
            });
        };
        return people;
      },
      add: function (person) {
        $http.post('people.json', person)
          .success(function () {
            people.push(person);
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      },
      remove: function (person) {
        $http.delete('people.json', person)
          .success(function () {
            people.splice(people.indexOf(person), 1)
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      },
      save: function (person) {
        $http.post('people.json', person)
          .success(function () {
            alert('Person saved');
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      }
    }
  })