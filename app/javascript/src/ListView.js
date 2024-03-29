var ListView = {
  
  things: []

  ,render: function() {
    var html_str = "<ul>";

    $.each(this.things, function(ndx, item) {
      html_str += "<li>" + item + "</li>";
    });
    html_str += "</ul>";

    $('#list').html(html_str);

  }

  ,add_thing: function(thing) {
    this.things.unshift(thing);

    if (this.things.length > 5) {
      this.things.pop();
    }

    this.render();
    this.save_things();
  }

  ,save_things: function() {
    if (Modernizr.localstorage) {
      localStorage.setItem('five_things.javascript.things', this.things);
    }
  }
  
  ,fetch_things: function() {
    if (Modernizr.localstorage) {
      var things_list = localStorage.getItem('five_things.javascript.things');
      if (things_list === null) {
        return [];
      }
      else {
        return things_list.split(',');
      }
    }
  }

  ,render_saved_things: function(things_list) {
    this.things = things_list;
    this.render();
  }

}
