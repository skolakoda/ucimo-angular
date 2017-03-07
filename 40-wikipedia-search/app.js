'use strict'
angular.module('WikiApp', [])
    .controller('WikiCtrl', WikiCtrl)

function WikiCtrl($http) {

  const wiki = this
  const apiUrl = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=JSON_CALLBACK&gsrsearch='

  wiki.search = function() {
    wiki.results = []
    if(!wiki.searchTxt) return

    $http.jsonp(apiUrl + wiki.searchTxt)
            .success(function(data) {
              angular.forEach(data.query.pages, function(page, pageId) {
                wiki.results.push({
                  title: page.title,
                  extract: page.extract,
                  pageUrl: 'http://en.wikipedia.org/?curid=' + pageId
                })
              })
            })
  }
}
