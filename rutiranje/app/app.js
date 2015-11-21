var Demo = angular.module("Demo", []);

Demo.config(
    function($routeProvider) {

        $routeProvider
            .when(
                "/home", {
                    action: "splash.home"
                }
            )
            .when(
                "/pets", {
                    action: "standard.pets.categories"
                }
            )
            .when(
                "/pets/:categoryID", {
                    action: "standard.pets.list"
                }
            )
            .when(
                "/pets/:categoryID/:petID", {
                    action: "standard.pets.detail.background"
                }
            )
            .when(
                "/pets/:categoryID/:petID/diet", {
                    action: "standard.pets.detail.diet"
                }
            )
            .when(
                "/pets/:categoryID/:petID/medical-history", {
                    action: "standard.pets.detail.medicalHistory"
                }
            )
            .when(
                "/contact", {
                    action: "standard.contact"
                }
            )
            .otherwise({
                redirectTo: "/home"
            });

    }
);
