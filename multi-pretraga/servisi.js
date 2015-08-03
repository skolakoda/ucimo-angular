angular.module('myApp')
    .factory('pretragaServis', pretragaServis);


function pretragaServis() {
  return {
    aktivniFilteri: {},
    fraza: ''
  };
} // pretragaServis