angular.module("App", [])
    .controller('HoteliKontrol', HoteliKontrol);


function HoteliKontrol($scope) {
    $scope.kriteriji=[];

    $scope.hotels = [
        {
            ime: 'the taj hotel',
            ocena: 5,
            vrsta: 'skup',
            cena: 5675
        },
        {
            ime: 'vivanta Palace',
            ocena: 5,
            vrsta: 'skup',
            cena: 8670
        },
        {
            ime: 'aviary',
            ocena: 4,
            vrsta: 'jeftin',
            cena: 3000
        },
        {
            ime: 'dummy',
            ocena: 4,
            vrsta: 'dummy',
            cena: 33333100
        },
        {
            ime: 'good guest',
            ocena: 3,
            vrsta: 'jeftin',
            cena: 3500
        },
        {
            ime: 'the ramada',
            ocena: 3,
            vrsta: 'skup',
            cena: 7500
        }
    ];
}   // HoteliKontrol