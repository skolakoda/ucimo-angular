angular.module('myApp', ['myApp.directives'])
  .controller('DatumKontrol', DatumKontrol);


function DatumKontrol($scope) {
  $scope.myText = 'Izaberi datum';
  $scope.currentDate = '';
  $scope.updateMyText = function(date) {
    $scope.myText = 'Izabran';
  };
}