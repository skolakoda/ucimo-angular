angular.module('formaModul', ['ajoslin.promise-tracker'])
    .controller('formKontrol', formKontrol);

function formKontrol($http, $log, promiseTracker, $timeout) {
  var forma = this;

  forma.listaOpcija = {
    'prodaja karata': 'Službi za prodaju karata',
    'saradnja': 'Službi za saradnju',
    'marketing sluzba': 'Službi za marketing (reklame)',
    'tehnicka sluzba': 'Tehničkoj podršci'
  };

  forma.progres = promiseTracker();	  		// gonicObecanja da prati slanje forme

  forma.potvrdi = function(obrazac) {
    forma.poslato = true;

    if (obrazac.$invalid) {
      return;
    }

    // Default values for the request.
    var podaci = {
      params: {
        'callback': 'JSON_CALLBACK',
        'name': forma.ime,
        'email': forma.email,
        'namenjeno': forma.namenjeno,
        'url': forma.url,
        'comments': forma.komentari
      },
    };

    // Perform JSONP request.
    var $obecanje = $http.jsonp('response.json', podaci)
        .success(function(data, status, headers, podaci) {
          if (data.status == 'OK') {
            forma.ime = null;
            forma.email = null;
            forma.namenjeno = null;
            forma.url = null;
            forma.komentari = null;
            forma.greske = 'Your obrazac has been sent!';
            forma.poslato = false;
          } else {
            forma.greske = 'Oops, we received your request, but there was an error processing it.';
            $log.error(data);
          }
        })
        .error(function(data, status, headers, podaci) {
          forma.progres = data;
          forma.greske = 'There was a network error. Try again later.';
          $log.error(data);
        })
        .finally(function() {
          // Hide status greske after three seconds.
          $timeout(function() {
            forma.greske = null;
          }, 3000);
        });

    // Track the request and show its progress to the user.
    forma.progres.addPromise($obecanje);
  };  // potvrdi
}   // formKontrol
