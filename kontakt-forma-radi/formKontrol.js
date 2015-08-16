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

                if (!data.uspeh) {
                    $scope.greska = data.errors;
                } else {
                    $scope.obavestenje = data.obavestenje;
                    $scope.greska = '';
                }
            });

    }; // processForm

} // formKontrol
