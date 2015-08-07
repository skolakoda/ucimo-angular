// glupa i beskorisna kriteriji po ceni i kolicini
// treba stringove umesto brojeva

angular.module('radnja', [])
	.controller('ProizvodiKontrol', ProizvodiKontrol)


function ProizvodiKontrol()  {
	var proizvodi = this;

	proizvodi.kriterij = "cena";		// default
	proizvodi.kriteriji = {
		ime: ""
	};

	proizvodi.spisak = [
		{ime: "Sapun", cena: "25", kolicina: "10"},
		{ime: "Krema", cena: "50", kolicina: "15"},
		{ime: "Sampon", cena: "100", kolicina: "5"}
	];

	proizvodi.sortiraj = function(proizvod) {
		// ako kriterij nije broj, ostavlja strunu, ako je broj parsira
		if(isNaN(proizvod[proizvodi.kriterij]))
			return proizvod[proizvodi.kriterij];
		return parseInt(proizvod[proizvodi.kriterij]);
	}
}	// ProizvodiKontrol
