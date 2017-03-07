angular.module('MyApp', [])
    .controller('ListCtrl', ['$scope', '$rootScope', '$http', ListCtrl])
    .controller('DetailCtrl', ['$scope', DetailCtrl]);


function ListCtrl($scope, $rootScope, $http) {
    $http
        .get('./users.json')
        .success(function(users) {
            $scope.users = users;
        });
    // reaguje na mouseenter i šalje novi događaj
    $scope.selectUser = function(user) {
        $rootScope.$broadcast('userChanged', user);
    };
}

function DetailCtrl($scope) {
    // osluškuje događaj i pokreće akciju
    $scope.$on('userChanged', function(event, user) {
        $scope.currentUser = user;
    });
}
