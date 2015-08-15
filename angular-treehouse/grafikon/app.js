angular.module('treehouseCourse', [])

  .directive('grafikon', function () {
    return {
      templateUrl: 'grafikon.html',
      replace: true,
      scope: {
        result: '=grafikon'
      },
      link: function ($scope, $element, $attrs) {
        $scope.$watch('result', function () {
          calculateDynamics();
        }, true);

        var calculateDynamics = function () {
          $scope.total = 0;
          $scope.optionColors = {};
          _.each($scope.result.rezultati, function (votes, option) {
            $scope.total += votes;
            $scope.optionColors[option] = 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ','+ _.random(0, 255) + ',1)'
          });
        }
      }
    }
  })
