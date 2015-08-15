angular.module('treehouseCourse', [])
  .controller('stageFourCtrl', function ($scope, People) {
    $scope.people = People.get();

    $scope.receipt = {
      "Steak": 21.99,
      "Salad": 8.99,
      "Chips": 1.50,
      "Drink": 2.00
    }
  })
  .factory('People', function ($http) {
    var people = [];

    return {
      get: function () {
        if (people.length == 0) {
          $http.get('people.json')
            .success(function (response) {
              for (var i = 0, ii = response.length; i < ii; i++) {
                people.push(response[i]);
              }
            })
            .error(function (err) {
              alert('ERROR: ' + err)
            });
        };
        return people;
      },
      add: function (person) {
        $http.post('people.json', person)
          .success(function () {
            people.push(person);
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      },
      remove: function (person) {
        $http.delete('people.json', person)
          .success(function () {
            people.splice(people.indexOf(person), 1)
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      },
      save: function (person) {
        $http.post('people.json', person)
          .success(function () {
            alert('Person saved');
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      }
    }
  })
  .directive('contactCard', function () {
    return {
      template: '<div class="contact-card">' + 
        '<p class="name">{{contact.name}}</p>' +
        '<p class="profession">{{contact.profession}}</p>' +
      '</div>',
      replace: true,
      scope: {
        'contact': '=contactCard'
      },
      link: function ($scope, $element, $attrs) {

      }
    }
  })
  .directive('datepicker', function () {
    return {
      link: function ($scope, $element, $attrs) {
        // $element.datepicker({
        //   dateFormat: $attrs.datepickerFormat
        // });

        var initializedDatepicker = false;
        $attrs.$observe('datepickerFormat', function (newValue) {
          // If we've already initialized this, just update option
          if (initializedDatepicker) {
            $element.datepicker('option', 'dateFormat', newValue);
          // $observe is still called immediately, even if there's no initial value
          // so we check to confirm there's at least one format set
          } else if (newValue) {
            $element.datepicker({
              dateFormat: newValue
            });
            initializedDatepicker = true;
          }
        });
      }
    }
  });