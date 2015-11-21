(function( ng, app ){

	"use strict";

	app.controller(
		"contact.ContactController",
		function( $scope, requestContext, _ ) {

			var renderContext = requestContext.getRenderContext( "standard.contact" );

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

			$scope.setWindowTitle( "Contact Us" );

		}
	);

})( angular, Demo );
