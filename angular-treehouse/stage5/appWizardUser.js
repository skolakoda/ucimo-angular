angular.module('treehouseCourse', [])
  .controller('stageFiveCtrl', function ($scope) {
    $scope.step = 1;

    $scope.advance = function () {
      $scope.step++;
    }
  })
  .controller('surveyCtrlOne', function ($scope, User) {
    $scope.user = User.get();
  })
  .controller('surveyCtrlTwo', function ($scope, User) {
    $scope.user = User.get();
  })
  .factory('User', function () {
    var user = {
      username: "",
      password: ""
    }

    return {
      get: function () {
        return user;
      }
    }
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
  .controller('DebugCtrl', function ($scope, User) {
    $scope.user = User.get();
  });