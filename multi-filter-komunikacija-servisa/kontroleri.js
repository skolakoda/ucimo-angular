// dele zajednicki pretragaServis, sto se mozda da iskoristiti, sve ostalo je umrseno

angular.module('someApp')
	.controller('KvaciceKontrol', ['kvaciceServis', 'pretragaServis', KvaciceKontrol])
	.controller('ListaKontrol', ['$scope','kvaciceServis','listaServis','pretragaServis', ListaKontrol])


function KvaciceKontrol(kvaciceServis, pretragaServis) {
	var kvacice = this;
    kvacice.spisak = kvaciceServis;

	kvacice.kriteriji = pretragaServis;
}	// KvaciceKontrol

function ListaKontrol($scope, kvaciceServis,listaServis, pretragaServis) {
	var lista = this;
    lista.kvacice = kvaciceServis;
    lista.spisak = listaServis;

	lista.kriteriji = pretragaServis;
}	// ListaKontrol