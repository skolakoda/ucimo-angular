angular
    .module('multiFilter', [])
    .controller('FilmoviKontrol', FilmoviKontrol)


function FilmoviKontrol($scope){
    var filmovi = this;
    filmovi.filter = {};
    filmovi.svi = [
        {naziv:'Man on the Moon', zanr:'akcioni'},
        {naziv:'Meet the Robinsons', zanr:'komedija'},
        {naziv:'Sphere', zanr:'akcioni'}
    ];
}   // FilmoviKontrol


