angular.module('treehouseCourse')
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
