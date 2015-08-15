angular.module('treehouseCourse', [])
  .controller('ScopesCtrl', function ($scope) {
    var $parent = $scope.$new();
    $parent.courseName = 'AngularJS Overview';

    var $child = $parent.$new();

    // outputs "AngularJS Overview";
    console.log($child.courseName);

    $child.courseName = 'Diving into Web Apps';

    // outputs "Diving into Web Apps";
    console.log($child.courseName);
    // still outputs "AngularJS Overview";
    console.log($parent.courseName);

    // Use an object instead
    $parent.course = {
      name: "AngularJS Overview",
      id: 123
    };

    $child.course.name = 'Diving into Web Apps';

    // Now both output "Diving into Web Apps";
    console.log($child.course.name);
    console.log($parent.course.name);
  })
  .directive('newScope', function () {
    return {
      scope: true,
      link: function ($scope, $element, $attrs) {
        // this scope prototypically inherits from the parent element
      }
    }
  })
  .directive('isolateScope', function () {
    return {
      scope: {
        'myBoundProperty': '=myBoundProperty'
      },
      link: function ($scope, $element, $attrs) {
        // This scope inherits nothing from the parent
        // except 'myBoundProperty', which is two-way bound
      }
    }
  });