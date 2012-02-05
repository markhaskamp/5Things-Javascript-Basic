describe("List", function() {

  it ('starts with an empty list of "things"', function() {
    var list = Object.beget(List);
    expect(list.things.length).toEqual(0);
  });

  describe("add_thing", function() {

    it("adds 'thing' to the list", function() {
      var list = Object.beget(List);
      list.add_thing('foo');
      expect(list.things[0]).toEqual('foo');
    });

    it("prepends 'thing' to the front of the list", function() {
      var list = Object.beget(List);
      list.add_thing('foo');
      list.add_thing('bar');
      expect(list.things[0]).toEqual('bar');
    });

    it("6th 'thing' pushes the last 'thing' off the list", function() {
      var list = Object.beget(List);
      list.add_thing('1');
      list.add_thing('2');
      list.add_thing('3');
      list.add_thing('4');
      list.add_thing('5');
      list.add_thing('eddie would go');

      expect(list.things[4]).toEqual('2');
      expect(list.things.length).toEqual(5);
    });
  });
});


