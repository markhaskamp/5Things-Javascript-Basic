
var listview;
var formview;

$(document).ready( function() {
    listview = Object.beget(ListView);
    formview = Object.beget(FormView);

    $('#btnAdd').on('click', function() {
      listview.add_thing(formview.get_thing());
    });

});

