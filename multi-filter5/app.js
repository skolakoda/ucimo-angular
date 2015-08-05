angular
    .module('multiFilter', [])
    .filter('poZanru', poZanru);

function poZanru() {
    return function(filmovi, zanrovi) {
        var spisak = {
            zanrovi: zanrovi,
            odabrani: []
        };
        angular.forEach(filmovi, proveriFilm, spisak);
        return spisak.odabrani;
    };
}

function proveriFilm(value, key) {
    if (this.zanrovi[value.zanr] === true) {
        this.odabrani.push(value);
    }
}
