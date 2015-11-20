angular.module('MyApp', [])
    .controller('ListCtrl', ['$scope', '$rootScope', '$http', 'usersService', ListCtrl])
	.controller('DetailCtrl', ['$scope', 'usersService', DetailCtrl])
    .factory('usersService', usersService);


function ListCtrl($scope, $rootScope, $http, usersService) {
	$http.get('./users.json').success(function (users) {
		$scope.users = users;
	});

	$scope.selectUser = function (user) {
		$rootScope.$broadcast('userChanged', user);
	};
}   // ListCtrl


function DetailCtrl($scope, usersService) {
	$scope.$on('userChanged', function (event, user) {
		$scope.currentUser = user;
	});
}   // DetailCtrl


// izgleda da nicemu ne sluzi
function usersService() {
	// var user;
	// return {
	// 	setCurrentUser: function (current) {
	// 		user = current;
	// 	},
	// 	getCurrentUser: function () {
	// 		return user;
	// 	}
	// };
}   // usersService
