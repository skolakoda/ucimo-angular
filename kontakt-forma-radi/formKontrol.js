angular.module('formApp', [])
	.controller('formKontrol', formKontrol)


function formKontrol($http, $httpParamSerializerJQLike) {
	var forma = this;
    forma.podaci = {};

    forma.obradi = function() {
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
                    forma.greska = odgovor.data.greska;
                } else {
                    forma.obavestenje = odgovor.data.obavestenje;
                    forma.greska = '';
                }
            });

    }; // obradi

} // formKontrol
