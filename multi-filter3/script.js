function ctrl($scope) {
  $scope.customers = [ {firstName: 'Marcos', city: 'New York'}, {firstName: 'Martijn', city: 'Miami'} ];
  $scope.search = {};

  $scope.searchBy = function () {
    return function (customer) {
      if ( $scope.search[customer.city] === true ) {
        return true;
      }
    }
  };

}
