angular.module('treehouseCourse', [])
  .controller('stageFiveCtrl', function ($scope) {
    $scope.course = {
      date: null,
    };
  })
  .directive('datepicker', function () {
    return {
      require: 'ngModel',
      link: function ($scope, $element, $attrs, ngModelCtrl) {
        var initializedDatepicker = false;
        $attrs.$observe('datepickerFormat', function (newValue) {
          // If we've already initialized this, just update option
          if (initializedDatepicker) {
            $element.datepicker('option', 'dateFormat', newValue);
          // $observe is still called immediately, even if there's no initial value
          // so we check to confirm there's at least one format set
          } else if (newValue) {
            $element.datepicker({
              dateFormat: newValue,
              onSelect: function (date) {
                $scope.$apply(function () {
                  ngModelCtrl.$setViewValue(date);
                });
              }
            });
            initializedDatepicker = true;
          }
        });

        ngModelCtrl.$render = function () {
          $element.datepicker('setDate', ngModelCtrl.$modelValue);
        }
      }
    }
  });