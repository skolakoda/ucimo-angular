angular.module('treehouseCourse', [])

  .directive('grafikon', function () {
    return {
      templateUrl: 'grafikon.html',
      replace: true,
      scope: {
        rezultat: '=grafikon'
      },
      link: function ($scope, $element, $attrs) {
        $scope.$watch('rezultat', function () {
          calculateDynamics();
        }, true);

        var calculateDynamics = function () {
          $scope.total = 0;
          $scope.optionColors = {};
          _.each($scope.rezultat.rezultati, function (votes, opcija) {
            $scope.total += votes;
            $scope.optionColors[opcija] = 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ','+ _.random(0, 255) + ',1)'
          });
        }
      }
    }
  })
