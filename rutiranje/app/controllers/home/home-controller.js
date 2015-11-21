(function( ng, app ){
	"use strict";

	app.controller(
		"home.HomeController",
		function( $scope, requestContext, _ ) {

			var renderContext = requestContext.getRenderContext( "splash.home" );
			$scope.subview = renderContext.getNextSection();

			$scope.$on(
				"requestContextChanged",
				function() {
					if ( ! renderContext.isChangeRelevant() ) {
						return;
					}
					$scope.subview = renderContext.getNextSection();
				}
			);
			$scope.setWindowTitle( "Welcome to Adopt-A-Pet" );
		}
	);

})( angular, Demo );
