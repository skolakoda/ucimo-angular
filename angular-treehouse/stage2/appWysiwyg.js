angular.module('treehouseCourse', [])
  .controller('stageTwoCtrl', function ($scope) {
    $scope.user = {
      name: "world",
      bio: "<p>They were one man, not thirty. For as the one ship that held them all; though it was put together of all contrasting things&mdash;oak, and maple, and pine wood; iron, and pitch, and hemp&mdash;yet all these ran into each other in the one concrete hull, which shot on its way, both balanced and directed by the long central keel; even so, all the individualities of the crew, this man's valor, that man's fear; guilt and guiltiness, all varieties were welded into oneness, and were all directed to that fatal goal which Ahab their one lord and keel did point to.</p>"
    };
  })
  .directive('hallo', function () {
    return {
      require: 'ngModel', 
      link: function ($scope, $element, $attrs, ngModelCtrl) {
        $element.hallo({
          plugins: {
            'halloformat': {},
            'halloblock': {},
            'hallojustify': {},
            'hallolists': {},
            'halloreundo': {}
          }
        });

        ngModelCtrl.$render = function () {
          var contents = ngModelCtrl.$viewValue;
          $element.hallo('setContents', contents);
        }

        $element.on('hallomodified', function () {
          var contents = $element.hallo('getContents');
          ngModelCtrl.$setViewValue(contents);
          $scope.$digest();
        });
      }
    }
  });