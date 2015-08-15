angular.module('treehouseCourse')
  .factory('Korisnik', function () {
    var korisnik = {
      pol: null,
      uzrast: null,
      odgovori: {}
    }
    return {
      get: function () {
        return korisnik;
      }
    }
  })
  .factory('Anketa', function () {
    var survey = {
      "title": "Treehouse Anketa",
      "pitanja": [
        {
          "id": 1,
          "uslov": false,
          "tekstPitanja": "What is your favorite language?",
          "opcije": [
            "JavaScript",
            "Ruby",
            "Go",
            "Other"
          ]
        },
        {
          "id": 2,
          "uslov": false,
          "tekstPitanja": "Do you prefer cats or dogs",
          "opcije": [
            "Cats",
            "Dogs",
            "Both are awesome",
            "Can't stand either"
          ]
        },
        {
          "id": 3,
          "uslov": "korisnik.uzrast == '<10'",
          "tekstPitanja": "What was your favorite part of the 2000's",
          "opcije": [
            "The internet",
            "Smartphones",
            "Rick Rolling"
          ]
        },
        {
          "id": 4,
          "uslov": "korisnik.uzrast == '20-29'",
          "tekstPitanja": "What was your favorite part of the 90's",
          "opcije": [
            "The hair",
            "The music",
            "Y2K"
          ]
        },
        {
          "id": 5,
          "uslov": "korisnik.uzrast == '30-39'",
          "tekstPitanja": "What was your favorite part of the 80's",
          "opcije": [
            "The hair",
            "The music",
            "Y2K"
          ]
        },
        {
          "id": 6,
          "uslov": "korisnik.uzrast == '40-49'",
          "tekstPitanja": "What was your favorite part of the 70's",
          "opcije": [
            "The hair",
            "The music",
            "Y2K"
          ]
        },
        {
          "id": 7,
          "uslov": "korisnik.uzrast == '50+'",
          "tekstPitanja": "What was your favorite decade so far?",
          "opcije": [
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
        return _.find(survey.pitanja, function (question) {
          return question.id == questionId;
        });
      }
    }
  })
  .factory('Rezultati', function (Anketa) {
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
            question: Anketa.getQuestion(id),
            results: results[id]
          };
          questionResults.push(result);
        }
        return questionResults;
      }
    };
  })
