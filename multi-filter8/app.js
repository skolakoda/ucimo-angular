angular.module('radnja', [])
	.controller('ProizvodiKontrol', ProizvodiKontrol)


function ProizvodiKontrol()  {
	var proizvodi = this;

	proizvodi.spisak = [
		{Ime: "Sapun", Cena: "25", Kolicina: "10"},
		{Ime: "Krema", Cena: "50", Kolicina: "15"},
		{Ime: "Shampon", Cena: "100", Kolicina: "5"}
	];

	proizvodi.sortiraj = function(item) {
		if(isNaN(item[proizvodi.kriterijSortiranja]))
			return item[proizvodi.kriterijSortiranja];
		return parseInt(item[proizvodi.kriterijSortiranja]);
	}
}
