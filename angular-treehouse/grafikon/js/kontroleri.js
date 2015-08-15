angular.module('treehouseCourse')
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
    $scope.survey = Anketa.get();

    $scope.$watch('korisnik', function() {
        $scope.questionsForUser = filterQuestions();
    }, true);

    $scope.$watch('survey.pitanja', function() {
        $scope.questionsForUser = filterQuestions();
    }, true);

    var filterQuestions = function() {
        if (!$scope.korisnik || !$scope.survey || !$scope.survey.pitanja) {
            return;
        };
        var pitanja = $scope.survey.pitanja;
        var filtered = [];
        for (var i = 0, ii = pitanja.length; i < ii; i++) {
            var question = pitanja[i];
            if (!question.uslov || $scope.$eval(question.uslov)) {
                filtered.push(question);
            };
        }
        return filtered;
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
        $scope.results = Rezultati.forQuestions(questionIds);
    }, true);
}	// logKontrol
