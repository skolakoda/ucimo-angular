angular.module('treehouseCourse')
  .controller('korakKontrol', function ($scope) {
    $scope.step = 1;

    $scope.advance = function () {
      $scope.step++;
    }
  })
  .controller('korisnikKontrol', function ($scope, User) {
    $scope.user = User.get();
  })
  .controller('anketaKontrol', function ($scope, User, Survey) {
    $scope.user = User.get();
    $scope.survey = Survey.get();

    $scope.$watch('user', function () {
      $scope.questionsForUser = filterQuestions();
    }, true);

    $scope.$watch('survey.questions', function () {
      $scope.questionsForUser = filterQuestions();
    }, true);

    var filterQuestions = function () {
      if (!$scope.user || !$scope.survey || !$scope.survey.questions) {
        return;
      };
      var questions = $scope.survey.questions;
      var filtered = [];
      for (var i = 0, ii = questions.length; i < ii; i++) {
        var question = questions[i];
        if (!question.conditional || $scope.$eval(question.conditional)) {
          filtered.push(question);
        };
      }
      return filtered;
    }
  })
  .controller('rezultatKontrol', function ($scope, User, Results) {
    var user = User.get();
    var questionIds = _.keys(user.surveyAnswers);
    $scope.surveyResults = Results.forQuestions(questionIds);
  })
  .controller('logKontrol', function ($scope, User, Results) {
    $scope.user = User.get();

    $scope.$watch('user.surveyAnswers', function () {
      var questionIds = _.keys($scope.user.surveyAnswers);
      $scope.results = Results.forQuestions(questionIds);
    }, true);
  })
