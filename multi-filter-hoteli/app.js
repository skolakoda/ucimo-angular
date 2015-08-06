// racuna i rec u naslovu

angular.module("App", [])
    .controller('HoteliKontrol', HoteliKontrol);


function HoteliKontrol($scope) {
    $scope.kriteriji = {
		//skupoca: "skup",
		slobodan: true
    };

    $scope.hotels = [
        {
            ime: 'skup hotel',
            ocena: 5,
            vrsta: 'jeftin',
            cena: 5675,
			slobodan: true
        },
        {
            ime: 'vivanta Palace',
            ocena: 5,
            vrsta: 'skup',
            cena: 8670,
			slobodan: true
        },
        {
            ime: 'aviary',
            ocena: 4,
            vrsta: 'jeftin',
            cena: 3000,
			slobodan: true
        },
        {
            ime: 'dummy',
            ocena: 4,
            vrsta: 'dummy',
            cena: 33333100,
			slobodan: true
        },
        {
            ime: 'good guest',
            ocena: 3,
            vrsta: 'jeftin',
            cena: 3500,
			slobodan: false
        },
        {
            ime: 'the ramada',
            ocena: 3,
            vrsta: 'skup',
            cena: 7500,
			slobodan: false
        }
    ];
}   // HoteliKontrol