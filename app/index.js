
var listview;
$(document).ready( function() {
    listview = Object.beget(ListView);

    $('#btnAdd').on('click', function() {
      listview.add_thing($('#txtItem').val());
    });

});

