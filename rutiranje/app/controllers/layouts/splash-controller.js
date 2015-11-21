(function() {
    "use strict";

    angular
        .module("Demo")
        .controller("layouts.SplashController", function($scope, requestContext, _) {

        var renderContext = requestContext.getRenderContext("splash");
        $scope.subview = renderContext.getNextSection();
        $scope.copyrightYear = (new Date()).getFullYear();

        $scope.$on(
            "requestContextChanged",
            function() {
                if (!renderContext.isChangeRelevant()) {
                    return;
                }
                $scope.subview = renderContext.getNextSection();
            }
        );

    });

})();
