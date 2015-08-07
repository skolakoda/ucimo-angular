angular.module('radnja', [])
	.controller('ProizvodiKontrol', ProizvodiKontrol)


function ProizvodiKontrol()  {
	var proizvodi = this;

	proizvodi.kriterijSortiranja = "cena";
	proizvodi.pretraga = {
		ime: "sa"
	};

	proizvodi.spisak = [
		{ime: "Sapun", cena: "25", kolicina: "10"},
		{ime: "Krema", cena: "50", kolicina: "15"},
		{ime: "Sampon", cena: "100", kolicina: "5"}
	];

	proizvodi.sortiraj = function(item) {
		if(isNaN(item[proizvodi.kriterijSortiranja]))
			return item[proizvodi.kriterijSortiranja];
		return parseInt(item[proizvodi.kriterijSortiranja]);
	}
}	// ProizvodiKontrol
