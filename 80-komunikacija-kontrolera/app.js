function ParamKontrol(parametriServis, pretragaServis) {
  const parametri = this
  parametri.spisak = parametriServis
  parametri.kriteriji = pretragaServis
}

function ListaKontrol(parametriServis, listaServis, pretragaServis) {
  const lista = this
  lista.parametri = parametriServis
  lista.spisak = listaServis
  lista.kriteriji = pretragaServis
}

angular.module('someApp', [])
	.controller('ParamKontrol', ['parametriServis', 'pretragaServis', ParamKontrol])
	.controller('ListaKontrol', ['parametriServis', 'listaServis', 'pretragaServis', ListaKontrol])
