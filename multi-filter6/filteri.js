angular.module('someApp')
	.filter('filterByCategory', filterByCategory)

function filterByCategory() {
    return function(input, checkboxes) {
        var ret =[];
        for (var i in input){
            var match = false;
            for (var j in checkboxes){
                if (checkboxes[j].izabrano && checkboxes[j].item == input[i].item){
                   ret.push(input[i]);   
                }
            }
        }
        if (ret.length > 0){
            return ret;
        } else {
            return input;
        }
    };
  }