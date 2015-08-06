angular.module('musterije', [])
    .controller('MusterijeKontrol', MusterijeKontrol);


function MusterijeKontrol($scope) {
  $scope.customers = [
    {firstName: 'Marcos', city: 'New York'},
    {firstName: 'Mika', city: 'Resnik'},
    {firstName: 'Zika', city: 'Resnik'},
    {firstName: 'Martijn', city: 'Miami'}
  ];
  $scope.search = {};

  $scope.searchBy = function () {
    return function (customer) {
      if ( $scope.search[customer.city] === true ) {
        return true;
      }
    }
  };

}
