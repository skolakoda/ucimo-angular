(function( ng, app ){
	"use strict";

	app.controller(
		"AppController",
		function( $scope, $route, $routeParams, $location, requestContext, _ ) {

			function isRouteRedirect( route ) {
				return( ! route.current.action );
			}


			$scope.getInstanceTime = function() {
				var now = new Date();
				var timeString = now.toTimeString();
				var instanceTime = timeString.match( /\d+:\d+:\d+/i );

				return( instanceTime[ 0 ] );
			};

			// TODO: Flesh this out - for now, just trying to create a wrapper for alert().
			$scope.openModalWindow = function( modalType ) {
				alert( arguments[ 1 ] || "Opps: Something went wrong." );
			};


			$scope.setWindowTitle = function( title ) {
				$scope.windowTitle = title;
			};


			var renderContext = requestContext.getRenderContext();

			$scope.windowTitle = "Adopt-A-Pet";
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

			$scope.$on(
				"$routeChangeSuccess",
				function( event ) {
					if ( isRouteRedirect( $route ) ) {
						return;
					}
					requestContext.setContext( $route.current.action, $routeParams );
					$scope.$broadcast( "requestContextChanged", requestContext );
				}
			);

		}
	);

})( angular, Demo );
