var ListView = {
  
  things: []

  ,add_thing: function(thing) {
    this.things.unshift(thing);

    if (this.things.length > 5) {
      this.things.pop();
    }

    this.render();
  }

  ,render: function() {
    var html_str = "<ul>";

    $.each(this.things, function(ndx, item) {
      html_str += "<li>" + item + "</li>";
    });
    html_str += "</ul>";

    $('#list').html(html_str);

  }

}
