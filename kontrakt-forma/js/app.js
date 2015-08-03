angular.module('formaModul', ['ajoslin.promise-tracker'])
    .controller('formKontrol', formKontrol);

function formKontrol($http, $log, promiseTracker, $timeout) {
  var forma = this;

  forma.listaOpcija = {
    'bug': 'Report a Bug',
    'account': 'Account Problems',
    'mobile': 'Mobile',
    'user': 'Report a Malicious User',
    'other': 'Other'
  };
  // pravi promiseTracker da prati potvrdjivanje forme
  forma.progres = promiseTracker();

  forma.potvrdi = function(formular) {
    forma.potvrdjeno = true;

    if (formular.$invalid) {
      return;
    }

    // Default values for the request.
    var podaci = {
      params: {
        'callback': 'JSON_CALLBACK',
        'name': forma.ime,
        'email': forma.email,
        'svrhaObracanja': forma.svrhaObracanja,
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
            forma.svrhaObracanja = null;
            forma.url = null;
            forma.komentari = null;
            forma.greske = 'Your formular has been sent!';
            forma.potvrdjeno = false;
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