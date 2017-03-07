// bower install angular-promise-tracker
angular.module('formularModul', ['ajoslin.promise-tracker'])
    .controller('formKontrol', formKontrol);

function formKontrol($http, $log, promiseTracker, $timeout) {
  var forma = this;

  forma.listaOpcija = {
    'prodaja karata': 'Službi za prodaju karata',
    'saradnja': 'Službi za saradnju',
    'marketing sluzba': 'Službi za marketing (reklame)',
    'tehnicka sluzba': 'Tehničkoj podršci'
  };

  forma.napredak = promiseTracker();	  		// gonicObecanja da prati slanje forme


  /* JAVNE FUNKCIJE */

  forma.posalji = function(obrazac) {
    forma.poslato = true;

    if (obrazac.$invalid) {
      return;
    }
    
    var podaci = {
      params: {
        'callback': 'JSON_CALLBACK',
        'name': forma.ime,
        'email': forma.email,
        'namenjeno': forma.namenjeno,
        'comments': forma.komentari
      },
    };
    
    var $obecanje = $http.jsonp('response.json', podaci)
        .success(function(data, status, headers, podaci) {
          if (data.status == 'OK') {
            forma.ime = null;
            forma.email = null;
            forma.namenjeno = null;
            forma.komentari = null;
            forma.obavestenje = 'Your obrazac has been sent!';
            forma.poslato = false;
          } else {
            forma.obavestenje = 'Oops, we received your request, but there was an error processing it.';
            $log.error(data);
          }
        })
        .error(function(data, status, headers, podaci) {
          forma.napredak = data;
          forma.obavestenje = 'There was a network error. Try again later.';
          $log.error(data);
        })
        .finally(function() {
          // krije obavestenje nakon 3 sekunde
          $timeout(function() {
            forma.obavestenje = null;
          }, 3000);
        });

    // prati zahtev i prikazuje napredak
    forma.napredak.addPromise($obecanje);
  };  // posalji


}   // formKontrol
