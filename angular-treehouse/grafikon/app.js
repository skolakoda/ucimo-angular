angular.module('treehouseCourse', [])
  .controller('stageSixCtrl', function ($scope) {
    $scope.step = 1;

    $scope.advance = function () {
      $scope.step++;
    }
  })
  .controller('userStepCtrl', function ($scope, User) {
    $scope.user = User.get();
  })
  .controller('surveyStepCtrl', function ($scope, User, Survey) {
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
  .controller('resultsStepCtrl', function ($scope, User, Results) {
    var user = User.get();
    var questionIds = _.keys(user.surveyAnswers);
    $scope.surveyResults = Results.forQuestions(questionIds);
  })
  .factory('User', function () {
    var user = {
      gender: null,
      ageRange: null,
      surveyAnswers: {}
    }
    return {
      get: function () {
        return user;
      }
    }
  })
  .factory('Survey', function () {
    var survey = {
      "title": "Treehouse Survey",
      "questions": [
        {
          "id": 1,
          "conditional": false,
          "questionText": "What is your favorite language?",
          "options": [
            "JavaScript",
            "Ruby",
            "Go",
            "Other"
          ]
        },
        {
          "id": 2,
          "conditional": false,
          "questionText": "Do you prefer cats or dogs",
          "options": [
            "Cats",
            "Dogs",
            "Both are awesome",
            "Can't stand either"
          ]
        },
        {
          "id": 3,
          "conditional": "user.ageRange == '<10'",
          "questionText": "What was your favorite part of the 2000's",
          "options": [
            "The internet",
            "Smartphones",
            "Rick Rolling"
          ]
        },
        {
          "id": 4,
          "conditional": "user.ageRange == '20-29'",
          "questionText": "What was your favorite part of the 90's",
          "options": [
            "The hair",
            "The music",
            "Y2K"
          ]
        },
        {
          "id": 5,
          "conditional": "user.ageRange == '30-39'",
          "questionText": "What was your favorite part of the 80's",
          "options": [
            "The hair",
            "The music",
            "Y2K"
          ]
        },
        {
          "id": 6,
          "conditional": "user.ageRange == '40-49'",
          "questionText": "What was your favorite part of the 70's",
          "options": [
            "The hair",
            "The music",
            "Y2K"
          ]
        },
        {
          "id": 7,
          "conditional": "user.ageRange == '50+'",
          "questionText": "What was your favorite decade so far?",
          "options": [
            "The 60's",
            "The 70's",
            "The 80's",
            "The 90's",
            "The 00's"
          ]
        }
      ]
    }

    return {
      get: function () {
        return survey;
      },
      getQuestion: function (questionId) {
        return _.find(survey.questions, function (question) {
          return question.id == questionId;
        });
      }
    }
  })
  .factory('Results', function (Survey) {
    var results = {
      1: {
        "JavaScript": 40,
        "Ruby": 25,
        "Go": 15,
        "Other": 20
      },
      2: {
        "Cats": 5,
        "Dogs": 20,
        "Both are awesome": 15,
        "Can't stand either": 2
      },
      3: {
        "The internet": 8,
        "Smartphones": 2,
        "Rick Rolling": 12
      },
      4: {
        "The hair": 3,
        "The music": 9,
        "Y2K": 15
      }
    }
    return {
      forQuestions: function (questionIds) {
        var questionResults = [];
        for (var i = 0, ii = questionIds.length; i < ii; i++) {
          var id = questionIds[i];
          var result = {
            question: Survey.getQuestion(id),
            results: results[id]
          };
          questionResults.push(result);
        }
        return questionResults;
      }
    };
  })
  .directive('barChart', function () {
    return {
      templateUrl: 'barChart.html',
      replace: true,
      scope: {
        result: '=barChart'
      },
      link: function ($scope, $element, $attrs) {
        $scope.$watch('result', function () {
          calculateDynamics();
        }, true);

        var calculateDynamics = function () {
          $scope.total = 0;
          $scope.optionColors = {};
          _.each($scope.result.results, function (votes, option) {
            $scope.total += votes;
            $scope.optionColors[option] = 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ','+ _.random(0, 255) + ',1)'
          });
        }
      }
    }
  })
  .controller('debugCtrl', function ($scope, User, Results) {
    $scope.user = User.get();

    $scope.$watch('user.surveyAnswers', function () {
      var questionIds = _.keys($scope.user.surveyAnswers);
      $scope.results = Results.forQuestions(questionIds);
    }, true);
  })