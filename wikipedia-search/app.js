"use strict";
angular.module('WikiApp', [])
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $http, $timeout) {
    $scope.results = [];

    $scope.search = function() {
        $scope.results = [];
        var apiUrl = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=JSON_CALLBACK&gsrsearch=' + $scope.searchTxt;
        var page = 'http://en.wikipedia.org/?curid=';

        $http.jsonp(apiUrl)
            .success(function(data) {
                var results = data.query.pages;
                angular.forEach(results, function(v, k) {
                    $scope.results.push({
                        title: v.title,
                        body: v.extract,
                        page: page + v.pageid
                    });
                });
            });
    };
}
