// ima zgodan mehanizam za inicijalno selektovanje svih kriterija

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

    musterije.kriteriji = {
        "Resnik": true
    };

    // postavlja sve kriterije chekirane
    for(var i in musterije.spisak){
        var grad = musterije.spisak[i].grad;
        musterije.kriteriji[grad] = true;
    }


    // pretvoriti u filter
    // gleda da li je grad prosledjene musterije istinit u kriterijima
    musterije.proveriGrad = function() {
        return function(musterija) {
            if (musterije.kriteriji[musterija.grad] === true) {
                return true;
            }
        }
    }   // proveriGrad

}	// MusterijeKontrol
