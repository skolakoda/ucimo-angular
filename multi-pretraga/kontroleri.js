angular.module('myApp')
    .controller('ListKontrol', ListKontrol)
    .controller('FilterKontrol', FilterKontrol)
    .controller('PretragaKontrol', PretragaKontrol)


function ListKontrol($scope) {
    $scope.pretragaServis = pretragaServis;
    // u servis!
    $scope.teamsList = [
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
}   // ListKontrol


function FilterKontrol($scope) {
    $scope.pretragaServis = pretragaServis;
    // u servis!
    $scope.gradovi = ['Dallas', 'Los Angeles', 'Boston', 'New York'];
}   // FilterKontrol


function PretragaKontrol(){
    var pretraga = this;
    pretraga.aktivniFilteri = {};
    pretraga.fraza = ''
}   // PretragaKontrol