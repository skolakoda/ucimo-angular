angular
    .module('multiFilter')
    .filter('poZanru', poZanru);


function poZanru() {
    return function(filmovi, zanrovi) {
        var spisak = {
            zanrovi: zanrovi,
            odabrani: []
        };
        angular.forEach(filmovi, function(value, key){
            if (spisak.zanrovi[value.zanr] === true) {
                spisak.odabrani.push(value);
            }
        }, spisak);
        return spisak.odabrani;
    };
}   // poZanru


function proveriFilm(value, key) {
    console.log()
    if (this.zanrovi[value.zanr] === true) {
        this.odabrani.push(value);
    }
}   // proveriFilm
