function proveriZanr(film) {
    // ako je zanr ovog filma u izabranim zanrovima
  if (this.izabraniZanrovi[film.zanr] === true) {
    this.odabraniFilmovi.push(film)
  }
}

function zanrFilter() {
  return function(sviFilmovi, izabraniZanrovi) {
    const podaci = {
      izabraniZanrovi,
      odabraniFilmovi: []
    }
    angular.forEach(sviFilmovi, proveriZanr, podaci)   // podaci su unutra this
    return podaci.odabraniFilmovi
  }
}

angular
    .module('multiFilter')
    .filter('zanrFilter', zanrFilter)
