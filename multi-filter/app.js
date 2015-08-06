angular.module('myApp', [])
    .controller('VinaKontrol', VinaKontrol);


function VinaKontrol($scope) {
    var vina = this;
    vina.izabrano = {};

    vina.spisak = [
        { ime: "vino A", vrsta: "crveno" },
        { ime: "vino B", vrsta: "crveno" },
        { ime: "vino C", vrsta: "belo" },
        { ime: "vino D", vrsta: "crveno" },
        { ime: "vino E", vrsta: "crveno" },
        { ime: "vino F", vrsta: "belo" },
        { ime: "vino G", vrsta: "shampanjac"},
        { ime: "vino H", vrsta: "shampanjac" }
    ];

    vina.nadjiVrste = function () {
        return (vina.spisak).map(function (w) {
            return w.vrsta;
        }).filter(function (w, index, niz) {
            return niz.indexOf(w) === index;
        });
    };

    vina.proberiPoVrsti = function (vino) {
        return vina.izabrano[vino.vrsta] || prikaziSve(vina.izabrano);
    };

    function prikaziSve(izabrano) {
        for (var stavka in izabrano) {
            if (izabrano[stavka]) {
                return false;           // ako je ista izabrano, ne prikazuj sve
            }
        }
        return true;                    // ako nije nista, prikazi sve
    }
}