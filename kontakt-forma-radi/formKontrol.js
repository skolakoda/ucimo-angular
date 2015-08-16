angular.module('formApp', [])
	.controller('formKontrol', formKontrol)


function formKontrol($scope, $http, $httpParamSerializerJQLike) {
	var forma = this;
    forma.podaci = {};

    $scope.processForm = function() {
        $http({
                method: 'POST',
                url: 'process.php',
                data: $httpParamSerializerJQLike(forma.podaci), // object to url string
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                } 
            })
            .success(function(data) {
                console.log(data);

                if (!data.success) {
                    $scope.errorName = data.errors.name;
                    $scope.errorSuperhero = data.errors.superheroAlias;
                } else {
                    $scope.message = data.message;
                    $scope.errorName = '';
                    $scope.errorSuperhero = '';
                }
            });

    }; // processForm

} // formKontrol
