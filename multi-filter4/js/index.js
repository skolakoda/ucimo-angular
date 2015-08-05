var filterMod = angular.module('angularDemo', [])
.controller('angularController', function($scope) {
  //sample data
  var products = [];
  var product1 = {
    name:'apple',
    properties: [
      {name:'type',value:'fruit'},{name:'color', value:'red'}, 
      {name:'size',value:'medium'},{name:'shape',value:'weird'}
    ]
  };
  var product2 = {
    name:'orange',
    properties:[
      {name:'type',value:'fruit'},{name:'color',value:'orange'},
      {name:'size',value:'medium'},{name:'shape',value:'sphere'}
    ]
  };
  var product3 = {
    name:'grapefruit',
    properties: [
      {name:'type',value:'fruit'},{name:'color',value:'yellow'},
      {name:'size',value:'large'},{name:'shape',value:'sphere'}
    ]
  };
  var product4 = {
    name:'lemon',
    properties: [
      {name:'type',value:'fruit'},{name:'color',value:'yellow'},
      {name:'size',value:'small'},{name:'shape',value:'lemon'}
    ]
  };
  var product5 = {
    name:'lime',
    properties: [
      {name:'type',value:'fruit'},{name:'color',value:'green'},
      {name:'size',value:'small'},{name:'shape',value:'lemon'}
    ]
  };
  
  var product6 = {
    name:'pepper',
    properties: [
      {name:'type',value:'vegetable'},{name:'color',value:'red'},
      {name:'size',value:'medium'},{name:'shape',value:'weird'}
    ]
  };
  products.push(product1);
  products.push(product2);
  products.push(product3);  
  products.push(product4);  
  products.push(product5);  
  products.push(product6);  
  
  $scope.Fruits = products;
  
  //create checkbox filters on the fly
  var filters = [];
  _.each(products, function(product){
    _.each(product.properties,function(property){      
      var existingfilter = _.findWhere(filters, { name: property.name });
        if(!existingfilter){
        var filter = {};
        filter.name = property.name;
        filter.values = [];
        filter.values.push({value: property.value});
        filters.push(filter);   
      }else{
        var existingoption = _.findWhere(existingfilter.values, { value: property.value });
        if(!existingoption){
           existingfilter.values.push({value: property.value}); 
        }
      }   
    });
  });
  $scope.Filters = filters;
  
});
  
filterMod.filter('dynamicFilter', function () {
  return function (products, filterCategories, scope) {
    var filtered = [];
    
    var productFilters = _.filter(filterCategories, function(fc) {
      return  _.any(fc.values, { 'IsIncluded': true });
    });
    
    _.each(products, function(prod) {
      var includeProduct = true;
      _.each(productFilters, function(filter) {
        var props = _.filter(prod.properties, { 'name': filter.name });
        if (!_.any(props, function(prop) { return _.any(filter.values, { 'value': prop.value, 'IsIncluded': true }); })){
          includeProduct = false;
        }
      });
      if (includeProduct) {
        filtered.push(prod);
      }
    });
    return filtered;
  };
});