angular
    .module('multiFilter')
    .filter('prikaziZanrove', prikaziZanrove);


function prikaziZanrove() {
    return function(filmovi, zanrovi) {
        var spisak = {
            zanrovi: zanrovi,
            odabrani: []
        };
        angular.forEach(filmovi, proveriZanr, spisak);
        return spisak.odabrani;
    };
}   // prikaziZanrove


function proveriZanr(value, key) {
    if (this.zanrovi[value.zanr] === true) {
        this.odabrani.push(value);
    }
}   // proveriZanr
