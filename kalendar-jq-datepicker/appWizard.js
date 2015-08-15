angular.module('treehouseCourse', [])
  .controller('surveyCtrl', function ($scope) {
    $scope.user = {
      username: "",
      password: ""
    };
  })
  .factory('uniqueness', function () {
    var usernames = [
      'treehouse',
      'mrvdot',
      'angular'
    ];

    return {
      taken: function (name) {
        return usernames.indexOf(name) >= 0;
      }
    }
  })
  .directive('uniqueCheck', function (uniqueness) {
    return {
      require: 'ngModel',
      link: function ($scope, $element, $attrs, ngModelCtrl) {
        var checkUnique = function (name) {
          var isValid = !uniqueness.taken(name);
          ngModelCtrl.$setValidity('unique', isValid);
          return name;
        }

        ngModelCtrl.$parsers.push(checkUnique);
      }
    }
  })