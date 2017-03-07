function FilmoviKontrol() {
  const filmovi = this
  filmovi.izabraniZanrovi = {}

  filmovi.svi = [
        {naziv:'Man on the Moon', zanr:'akcioni'},
        {naziv:'Meet the Robinsons', zanr:'komedija'},
        {naziv:'Sphere', zanr:'akcioni'}
  ]
}

angular
    .module('multiFilter', [])
    .controller('FilmoviKontrol', FilmoviKontrol)
