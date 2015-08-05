var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.vina = [
        { ime: "Vino A", vrsta: "crveno" },
        { ime: "Vino B", vrsta: "crveno" },
        { ime: "Vino C", vrsta: "belo" },
        { ime: "Vino D", vrsta: "crveno" },
        { ime: "Vino E", vrsta: "crveno" },
        { ime: "Vino F", vrsta: "belo" },
        { ime: "Vino G", vrsta: "shampanjac"},
        { ime: "Vino H", vrsta: "shampanjac" }
    ];

    $scope.izabrano = {};

    $scope.nadjiVrste = function () {
        return ($scope.vina).map(function (w) {
            return w.vrsta;
        }).filter(function (w, index, niz) {
            return niz.indexOf(w) === index;
        });
    };

    $scope.proberiPoVrsti = function (Vino) {
        return $scope.izabrano[Vino.vrsta] || noFilter($scope.izabrano);
    };

    function noFilter(izabrano) {
        for (var key in izabrano) {
            if (izabrano[key]) {
                return false;
            }
        }
        return true;
    }
});
