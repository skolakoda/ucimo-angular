angular
    .module('multiFilter')
    .filter('prikaziZanrove', prikaziZanrove);


function prikaziZanrove() {
    return function(sviFilmovi, izabraniZanrovi) {
        var filmovi = {
            izabraniZanrovi: izabraniZanrovi,
            odabrani: []
        };
        angular.forEach(sviFilmovi, proveriZanr, filmovi);
        return filmovi.odabrani;
    };
}   // prikaziZanrove


function proveriZanr(film) {
    if (this.izabraniZanrovi[film.zanr] === true) {
        this.odabrani.push(film);
    }
}   // proveriZanr
