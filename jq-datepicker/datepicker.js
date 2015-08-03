angular.module('myApp.directives', [])
  .directive('datepicker', datepicker);


function datepicker() {
  return {
    restrict: 'A',
    require: '?ngModel',
    scope: {
      select: '&'        // Bind the select function we refer to the right scope
    },
    link: izaberiDatum
  };
}


function izaberiDatum(scope, element, attrs, ngModel) {
  if (!ngModel) return;

  var optionsObj = {};

  optionsObj.dateFormat = 'mm/dd/yy';
  var updateModel = function(dateTxt) {
    scope.$apply(function () {
      ngModel.$setViewValue(dateTxt);
    });
  };

  optionsObj.onSelect = function(dateTxt, picker) {
    updateModel(dateTxt);
    if (scope.select) {
      scope.$apply(function() {
        scope.select({date: dateTxt});
      });
    }
  };

  ngModel.$render = function() {
    element.datepicker('setDate', ngModel.$viewValue || '');
  };
  element.datepicker(optionsObj);
}