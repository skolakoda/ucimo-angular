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


function korisnikKontrol($scope, User) {
    $scope.korisnik = User.get();
}	// korisnikKontrol


function anketaKontrol($scope, User, Survey) {
    $scope.korisnik = User.get();
    $scope.survey = Survey.get();

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


function rezultatKontrol($scope, User, Results) {
    var korisnik = User.get();
    var questionIds = _.keys(korisnik.odgovori);
    $scope.surveyResults = Results.forQuestions(questionIds);
}	// rezultatKontrol


function logKontrol($scope, User, Results) {
    $scope.korisnik = User.get();

    $scope.$watch('korisnik.odgovori', function() {
        var questionIds = _.keys($scope.korisnik.odgovori);
        $scope.results = Results.forQuestions(questionIds);
    }, true);
}	// logKontrol
