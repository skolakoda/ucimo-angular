(function( ng, app ){
	"use strict";

	app.controller(
		"layouts.StandardController",
		function( $scope, requestContext, _ ) {

			var renderContext = requestContext.getRenderContext( "standard" );
			$scope.subview = renderContext.getNextSection();
			$scope.copyrightYear = ( new Date() ).getFullYear();

			$scope.$on(
				"requestContextChanged",
				function() {
					if ( ! renderContext.isChangeRelevant() ) {
						return;
					}
					$scope.subview = renderContext.getNextSection();
				}
			);

		}
	);

})( angular, Demo );
