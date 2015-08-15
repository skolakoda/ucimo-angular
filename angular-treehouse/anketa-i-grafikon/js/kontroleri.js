angular.module('anketaModul')
    .controller('korakKontrol', korakKontrol)
    .controller('korisnikKontrol', korisnikKontrol)
    .controller('anketaKontrol', anketaKontrol)
    .controller('rezultatKontrol', rezultatKontrol)
    .controller('logKontrol', logKontrol)


function korakKontrol($scope) {
    $scope.korak = 1;

    $scope.advance = function() {
        $scope.korak++;
    }
}	// korakKontrol


function korisnikKontrol($scope, Korisnik) {
    $scope.korisnik = Korisnik.daj();
}	// korisnikKontrol


function anketaKontrol($scope, Korisnik, Anketa) {
    $scope.korisnik = Korisnik.daj();
    $scope.anketa = Anketa.daj();

    $scope.$watch('korisnik', function() {
        $scope.pitanjaKorisniku = proberiPitanja();
    }, true);

    $scope.$watch('anketa.pitanja', function() {
        $scope.pitanjaKorisniku = proberiPitanja();
    }, true);

    var proberiPitanja = function() {
        if (!$scope.korisnik || !$scope.anketa || !$scope.anketa.pitanja) {
            return;
        };
        var pitanja = $scope.anketa.pitanja;
        var probrano = [];
        for (var i = 0, ii = pitanja.length; i < ii; i++) {
            var pitanje = pitanja[i];
            if (!pitanje.uslov || $scope.$eval(pitanje.uslov)) {
                probrano.push(pitanje);
            };
        }
        return probrano;
    }
}	// anketaKontrol


function rezultatKontrol($scope, Korisnik, Rezultati) {
    var korisnik = Korisnik.daj();
    var brojeviPitanja = _.keys(korisnik.odgovori);
    $scope.rezultatiAnkete = Rezultati.zaPitanja(brojeviPitanja);
}	// rezultatKontrol


function logKontrol($scope, Korisnik, Rezultati) {
    $scope.korisnik = Korisnik.daj();

    $scope.$watch('korisnik.odgovori', function() {
        var brojeviPitanja = _.keys($scope.korisnik.odgovori);
        $scope.rezultati = Rezultati.zaPitanja(brojeviPitanja);
    }, true);
}	// logKontrol
