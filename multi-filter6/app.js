// baguje

var app = angular.module('app', []);

app.controller('myController', function($scope) {
  $scope.projects = [{
    name: 'First thing',
    state: 'CA',
    stateID: '1',
    county: 'Orange',
    countyID: '191',
      uid: 1
  }, {
    name: 'Another Thing',
    state: 'CA',
    stateID: '1',
    county: 'LosAngeles',
    countyID: '190',
      uid: 2
  }, {
    name: 'In California',
    state: 'CA',
    stateID: '1',
    county: 'Orange',
    countyID: '191',
      uid: 0
  }, {
    name: 'Hey Arizona!',
    state: 'Arizona',
    stateID: '13',
    county: 'Multiple Counties',
    countyID: '3178',
      uid: 0
  },{
    name: 'hello Utah',
    state: 'Utah',
    stateID: '14',
    county: 'Utah County',
    countyID: '200',
      uid: 0
  }];

  $scope.st_option = [{
    state: "California",
    stateID: "1"
  }, {
    state: "Arizona",
    stateID: "13"
  },{
    state: "Utah",
    stateID: "14"
  }];

  $scope.co_option = [{
    county: "Orange",
    countyID: "191",
    co_state_id: "1"
  }, {
    county: "Multiple Counties",
    countyID: "3178",
    co_state_id: "13"
  }, {
    county: "Sonoma",
    countyID: "218",
    co_state_id: "1"
  }, {
    county: "Los Angeles",
    countyID: "190",
    co_state_id: "1"
  }, {
    county: "Utah County",
    countyID: "200",
    co_state_id: "14"
  }];

  $scope.filterActive = false;  
    $scope.filter = function(entry) {
        if($scope.filterActive) {
            return (entry.uid > 0) ? true: false;
        }
        return true;
    }
    
    $scope.uidFilter = function() {
        if ($scope.uid != 0){
            return true;
           }
        }
 $scope.clearFilter = function() {
    $scope.filter = {};
  };
});