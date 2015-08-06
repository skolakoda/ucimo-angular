angular
    .module('multiFilter')
    .filter('proberiPoZanru', proberiPoZanru);


function proberiPoZanru() {
    return function(sviFilmovi, izabraniZanrovi) {
        var podaci = {
            izabraniZanrovi: izabraniZanrovi,
            odabraniFilmovi: []
        };
        angular.forEach(sviFilmovi, proveriZanr, podaci);   // podaci su this
        return podaci.odabraniFilmovi;
    };
}   // proberiPoZanru


function proveriZanr(film) {
    if (this.izabraniZanrovi[film.zanr] === true) {
        this.odabraniFilmovi.push(film);
    }
}   // proveriZanr
