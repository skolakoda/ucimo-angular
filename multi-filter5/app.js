// ne vredi kurcu, bira samo sebe

angular.module('pozor', []);

function VoceKontrol($scope) {
	var voce = this;
    voce.spisak = [
        {'ime': 'jabuka', 'boja': 'crveno'},
		{'ime': 'jagoda', 'boja': 'crveno'},
        {'ime': 'narandža', 'boja': 'narandžasto'},
        {'ime': 'banana', 'boja': 'žuto'}
    ];
}