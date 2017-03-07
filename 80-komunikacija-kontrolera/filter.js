angular.module('someApp')
	.filter('proveriGrupu', proveriGrupu)


function proveriGrupu() {
  return function(input, parametri) {
    const probrano = []
    for (const i in input) {
      for (const j in parametri) {
        if (parametri[j].izabrano && parametri[j].grupa == input[i].grupa) {
          probrano.push(input[i])
        }
      }
    }
    if (probrano.length > 0) {
      return probrano
    } else {
      return input
    }
  }
}
