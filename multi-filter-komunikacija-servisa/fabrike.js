angular.module('someApp')
	.factory('kvaciceServis', kvaciceServis)
	.factory('listaServis', listaServis)
	.factory('pretragaServis', pretragaServis)


function kvaciceServis() {
    var kvaciceServis = [
        { ime: 'grupa 1', grupa: 1 },
        { ime: 'grupa 2', grupa: 2 },
        { ime: 'grupa 3', grupa: 3 }
    ];
    return kvaciceServis;
}	// kvaciceServis


function listaServis() {
    var listaServis = [
        { ime: 'predmet 01', grupa: 1 },
        { ime: 'predmet 02', grupa: 2 },
        { ime: 'predmet 03', grupa: 3 },
        { ime: 'predmet 04', grupa: 1 },
        { ime: 'predmet 05', grupa: 2 },
        { ime: 'predmet 06', grupa: 3 },
        { ime: 'predmet 07', grupa: 1 },
        { ime: 'predmet 08', grupa: 2 },
        { ime: 'predmet 09', grupa: 3 },
        { ime: 'predmet 10', grupa: 1 }
    ];
    return listaServis;
}	// listaServis

function pretragaServis(){
	return { upit: "" }
}	// pretragaServis