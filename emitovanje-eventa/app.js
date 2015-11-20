angular.module('MyApp', [])
    .controller('ListCtrl', ['$scope', '$rootScope', '$http', ListCtrl])
    .controller('DetailCtrl', ['$scope', DetailCtrl]);


function ListCtrl($scope, $rootScope, $http) {

    $http
        .get('./users.json')
        .success(function(users) {
            $scope.users = users;
        });

    $scope.selectUser = function(user) {
        $rootScope.$broadcast('userChanged', user);
    };

} // ListCtrl


function DetailCtrl($scope) {

    $scope.$on('userChanged', function(event, user) {
        $scope.currentUser = user;
    });

} // DetailCtrl
