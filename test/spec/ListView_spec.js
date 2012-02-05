describe("ListView", function() {

  it ('starts with an empty list of "things"', function() {
    var listview = Object.beget(ListView);
    expect(listview.things.length).toEqual(0);
  });

  describe("add_thing", function() {

    it("adds 'thing' to the list", function() {
      var listview = Object.beget(ListView);
      listview.add_thing('foo');
      expect(listview.things[0]).toEqual('foo');
    });

    it("prepends 'thing' to the front of the list", function() {
      var listview = Object.beget(ListView);
      listview.add_thing('foo');
      listview.add_thing('bar');
      expect(listview.things[0]).toEqual('bar');
    });

    it("6th 'thing' pushes the last 'thing' off the list", function() {
      var listview = Object.beget(ListView);
      listview.add_thing('1');
      listview.add_thing('2');
      listview.add_thing('3');
      listview.add_thing('4');
      listview.add_thing('5');
      listview.add_thing('eddie would go');

      expect(listview.things[4]).toEqual('2');
      expect(listview.things.length).toEqual(5);
    });

    it("add_thing calls render", function() {
      var listview = Object.beget(ListView);
      spyOn(listview, 'render');
      listview.add_thing('foo argument');

      expect(listview.render).toHaveBeenCalled();
    });

  });
});


