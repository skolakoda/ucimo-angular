// uporedjuje nazive atributa u izabraniZanrovi sa strunama zanrova filma

angular
    .module('multiFilter')
    .filter('zanrFilter', zanrFilter);


function zanrFilter() {
    return function(sviFilmovi, izabraniZanrovi) {
        var podaci = {
            izabraniZanrovi: izabraniZanrovi,
            odabraniFilmovi: []
        };
        angular.forEach(sviFilmovi, proveriZanr, podaci);   // podaci su unutra this
        return podaci.odabraniFilmovi;
    };
}   // zanrFilter


function proveriZanr(film) {
    // ako je zanr ovog filma u izabranim zanrovima
    if (this.izabraniZanrovi[film.zanr] === true) {
        this.odabraniFilmovi.push(film);
    }
}   // proveriZanr
