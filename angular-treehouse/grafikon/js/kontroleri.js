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
    $scope.korisnik = Korisnik.get();
}	// korisnikKontrol


function anketaKontrol($scope, Korisnik, Anketa) {
    $scope.korisnik = Korisnik.get();
    $scope.anketa = Anketa.get();

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
    var korisnik = Korisnik.get();
    var questionIds = _.keys(korisnik.odgovori);
    $scope.surveyResults = Rezultati.forQuestions(questionIds);
}	// rezultatKontrol


function logKontrol($scope, Korisnik, Rezultati) {
    $scope.korisnik = Korisnik.get();

    $scope.$watch('korisnik.odgovori', function() {
        var questionIds = _.keys($scope.korisnik.odgovori);
        $scope.rezultati = Rezultati.forQuestions(questionIds);
    }, true);
}	// logKontrol
