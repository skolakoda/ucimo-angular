// checkbox moze da prikazuje true/false ili true/sve
// po defoltu je true/false, sa ng-false-value moze prazna struna

angular.module('myApp', [])
    .controller('IgraciKontrol', IgraciKontrol)


function IgraciKontrol() {
    var igraci = this;
    igraci.trazeno = '';
    igraci.kriteriji = {};
    igraci.kriteriji.istaknut = true;

    // u servis!
    igraci.spisak = [
        {id: 1, ime: 'Dallas Mavericks', sport: 'kosarka', grad: 'Dallas', istaknut: true},
        {id: 2, ime: 'Dallas Cowboys', sport: 'fudbal', grad: 'Dallas', istaknut: false},
        {id: 3, ime: 'New York Knicks', sport: 'kosarka', grad: 'New York', istaknut: false},
        {id: 4, ime: 'Brooklyn Nets', sport: 'kosarka', grad: 'New York', istaknut: false},
        {id: 5, ime: 'New York Jets', sport: 'fudbal', grad: 'New York', istaknut: false},
        {id: 6, ime: 'New York Giants', sport: 'fudbal', grad: 'New York', istaknut: true},
        {id: 7, ime: 'Los Angeles Lakers', sport: 'kosarka', grad: 'Los Angeles', istaknut: true},
        {id: 8, ime: 'Los Angeles Clippers', sport: 'kosarka', grad: 'Los Angeles', istaknut: false},
        {id: 9, ime: 'Dallas Stars', sport: 'hokej', grad: 'Dallas', istaknut: false},
        {id: 10, ime: 'Boston Bruins', sport: 'hokej', grad: 'Boston', istaknut: true}
    ];
    igraci.gradovi = ['Dallas', 'Los Angeles', 'Boston', 'New York'];
}   // IgraciKontrol
