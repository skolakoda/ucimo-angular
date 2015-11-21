(function( ng, app ){

	"use strict";

	app.controller(
		"pets.detail.DetailController",
		function( $scope, $location, $q, requestContext, categoryService, petService, _ ) {

			function applyRemoteData( category, pet ) {
				$scope.category = category;
				$scope.pet = pet;
				$scope.setWindowTitle( pet.name + " - " + pet.breed );
			}


			function loadRemoteData() {
				$scope.isLoading = true;

				var promise = $q.all(
					[
						categoryService.getCategoryByID( $scope.categoryID ),
						petService.getPetByID( $scope.petID )
					]
				);

				promise.then(
					function( response ) {
						$scope.isLoading = false;
						applyRemoteData( response[ 0 ], response[ 1 ] );
					},
					function( response ) {
						$location.path( "/pets/" + $scope.categoryID );
					}
				);

			}


			var renderContext = requestContext.getRenderContext( "standard.pets.detail", "petID" );

			$scope.categoryID = requestContext.getParam( "categoryID" );
			$scope.petID = requestContext.getParamAsInt( "petID" );
			$scope.isLoading = true;
			$scope.category = null;
			$scope.pet = null;
			$scope.subview = renderContext.getNextSection();

			$scope.$on(
				"requestContextChanged",
				function() {
					if ( ! renderContext.isChangeRelevant() ) {
						return;
					}
					$scope.categoryID = requestContext.getParam( "categoryID" );
					$scope.petID = requestContext.getParamAsInt( "petID" );
					$scope.subview = renderContext.getNextSection();

					if ( requestContext.haveParamsChanged( [ "categoryID", "petID" ] ) ) {
						loadRemoteData();
					}
				}
			);

			$scope.setWindowTitle( "Loading Pet" );
			loadRemoteData();
		}
	);

})( angular, Demo );
