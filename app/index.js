
var listview;
var formview;

$(document).ready( function() {
    listview = Object.beget(ListView);
    formview = Object.beget(FormView);

    var saved_things = listview.fetch_things();
    listview.render_saved_things(saved_things);

    $('#btnAdd').on('click', function() {
      listview.add_thing(formview.get_thing());
    });

});

