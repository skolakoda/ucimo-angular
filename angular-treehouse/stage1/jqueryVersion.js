(function($) {
  var insertPeople = function (people) {
    var $people = $('#people');
    for (var i = 0, ii = people.length; i < ii; i++) {
      var person = people[i];
      var $element = $('<li></li>').addClass(person.profession);
      $element.append('<span class="name">' + person.name + '</span>');
      $element.append('<span class="profession">' + person.profession + '</span>');
      $element.append('<span class="hometown">' + person.hometown + '</span>');
      $people.append($element);
    }
  };

  $.getJSON('people.json', insertPeople);
})(jQuery); 