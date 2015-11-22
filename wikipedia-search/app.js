"use strict";
angular.module('WikiApp', [])
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $http) {

    $scope.search = function() {
        if(!$scope.searchTxt) return;
        $scope.results = [];
        var apiUrl = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=JSON_CALLBACK&gsrsearch=' + $scope.searchTxt;

        $http.jsonp(apiUrl)
            .success(function(data) {
                angular.forEach(data.query.pages, function(page, pageId) {
                    $scope.results.push({
                        title: page.title,
                        extract: page.extract,
                        pageUrl: 'http://en.wikipedia.org/?curid=' + pageId
                    });
                });
            }); // end success
    };
}   // MainCtrl
