angular.module('someApp')
	.filter('proveriGrupu', proveriGrupu)


function proveriGrupu() {
    return function(input, kvacice) {
        var probrano =[];
        for (var i in input){
            var match = false;
            for (var j in kvacice){
                if (kvacice[j].izabrano && kvacice[j].grupa == input[i].grupa){
                   probrano.push(input[i]);   
                }
            }
        }
        if (probrano.length > 0){
            return probrano;
        } else {
            return input;
        }
    };
  }