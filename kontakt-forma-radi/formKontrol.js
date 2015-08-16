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
            .then(function(odgovor) {
                console.log(odgovor.data);

                if (!odgovor.data.uspeh) {
                    $scope.greska = odgovor.data.greska;
                } else {
                    $scope.obavestenje = odgovor.data.obavestenje;
                    $scope.greska = '';
                }
            });

    }; // processForm

} // formKontrol
