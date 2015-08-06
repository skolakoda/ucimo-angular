angular.module('someApp')
	.factory('kvaciceServis', kvaciceServis)
	.factory('listaServis', listaServis)
	.factory('pretragaServis', pretragaServis)


function kvaciceServis() {
    var kvaciceServis = [
        { ime: 'item 1', item: 1 },
        { ime: 'item 2', item: 2 },
        { ime: 'item 3', item: 3 }
    ];
    return kvaciceServis;
}	// kvaciceServis


function listaServis() {
    var listaServis = [
        { ime: 'predmet 01', item: 1 },
        { ime: 'predmet 02', item: 2 },
        { ime: 'predmet 03', item: 3 },
        { ime: 'predmet 04', item: 1 },
        { ime: 'predmet 05', item: 2 },
        { ime: 'predmet 06', item: 3 },
        { ime: 'predmet 07', item: 1 },
        { ime: 'predmet 08', item: 2 },
        { ime: 'predmet 09', item: 3 },
        { ime: 'predmet 10', item: 1 }
    ];
    return listaServis;
}	// listaServis

function pretragaServis(){
	return { upit: "" }
}	// pretragaServis
