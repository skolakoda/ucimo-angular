angular.module('myApp')
    .controller('PodaciKontrol', PodaciKontrol)
    .controller('PretragaKontrol', PretragaKontrol)


function PretragaKontrol(){
    var pretraga = this;
    pretraga.aktivniFilteri = {};
    pretraga.fraza = ''
}   // PretragaKontrol


function PodaciKontrol() {
    var podaci = this;
    // u servis!
    podaci.igraci = [
        {id: 1, ime: 'Dallas Mavericks', sport: 'Basketball', grad: 'Dallas', istaknut: true},
        {id: 2, ime: 'Dallas Cowboys', sport: 'Football', grad: 'Dallas', istaknut: false},
        {id: 3, ime: 'New York Knicks', sport: 'Basketball', grad: 'New York', istaknut: false},
        {id: 4, ime: 'Brooklyn Nets', sport: 'Basketball', grad: 'New York', istaknut: false},
        {id: 5, ime: 'New York Jets', sport: 'Football', grad: 'New York', istaknut: false},
        {id: 6, ime: 'New York Giants', sport: 'Football', grad: 'New York', istaknut: true},
        {id: 7, ime: 'Los Angeles Lakers', sport: 'Basketball', grad: 'Los Angeles', istaknut: true},
        {id: 8, ime: 'Los Angeles Clippers', sport: 'Basketball', grad: 'Los Angeles', istaknut: false},
        {id: 9, ime: 'Dallas Stars', sport: 'Hockey', grad: 'Dallas', istaknut: false},
        {id: 10, ime: 'Boston Bruins', sport: 'Hockey', grad: 'Boston', istaknut: true}
    ];
    podaci.gradovi = ['Dallas', 'Los Angeles', 'Boston', 'New York'];
}   // PodaciKontrol
