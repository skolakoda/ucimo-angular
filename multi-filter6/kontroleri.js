angular.module('someApp')
	.controller('KvaciceKontrol', ['kvaciceServis', 'pretragaServis', KvaciceKontrol])
	.controller('ListaKontrol', ['$scope','kvaciceServis','listaServis','pretragaServis', ListaKontrol])


function KvaciceKontrol(kvaciceServis, pretragaServis) {
	var kvacice = this;
    kvacice.sve = kvaciceServis;
    kvacice.kriteriji = pretragaServis;
}	// KvaciceKontrol

function ListaKontrol($scope, kvaciceServis,listaServis, pretragaServis) {
	var lista = this;
	lista.kriteriji = pretragaServis;

    $scope.checkboxes = kvaciceServis;
    $scope.listItems = listaServis;
}	// ListaKontrol