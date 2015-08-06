angular.module('musterije', ['filteri'])
    .controller('MusterijeKontrol', MusterijeKontrol)
	
	
function MusterijeKontrol($scope) {
	var musterije = this;
	
    musterije.spisak = [{
        ime: 'Marcos',
        grad: 'New York'
    }, {
        ime: 'Mika',
        grad: 'Resnik'
    }, {
        ime: 'Zika',
        grad: 'Resnik'
    }, {
        ime: 'Martijn',
        grad: 'Miami'
    }];

    musterije.kriteriji = {};

    musterije.proveriGrad = function() {
        return function(musterija) {
            if (musterije.kriteriji[musterija.grad] === true) {
                return true;
            }
        }
    };
}	// MusterijeKontrol
