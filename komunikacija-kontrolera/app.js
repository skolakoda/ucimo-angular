angular.module('someApp', [])
	.controller('ParamKontrol', ['parametriServis', 'pretragaServis', ParamKontrol])
	.controller('ListaKontrol', ['parametriServis', 'listaServis', 'pretragaServis', ListaKontrol]);


function ParamKontrol(parametriServis, pretragaServis) {
	var parametri = this;
	parametri.spisak = parametriServis;
	parametri.kriteriji = pretragaServis;
} // ParamKontrol

function ListaKontrol(parametriServis, listaServis, pretragaServis) {
	var lista = this;
	lista.parametri = parametriServis;
	lista.spisak = listaServis;
	lista.kriteriji = pretragaServis;
} // ListaKontrol
