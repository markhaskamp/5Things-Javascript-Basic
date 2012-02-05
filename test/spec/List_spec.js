describe("List", function() {

  it ('starts with an empty list of "things"', function() {
    var list = Object.beget(List);
    expect(list.things.length).toEqual(0);
  });

  describe("add_item", function() {

    it("adds 'thing' to the list", function() {
      var list = Object.beget(List);
      list.add_item('foo');
      expect(list.things[0]).toEqual('foo');
    });

    it("prepends 'thing' to the front of the list", function() {
      var list = Object.beget(List);
      list.add_item('foo');
      list.add_item('bar');
      expect(list.things[0]).toEqual('bar');
    });

    it("6th 'thing' pushes the last 'thing' off the list", function() {
      var list = Object.beget(List);
      list.add_item('1');
      list.add_item('2');
      list.add_item('3');
      list.add_item('4');
      list.add_item('5');
      list.add_item('eddie would go');

      expect(list.things[4]).toEqual('2');
      expect(list.things.length).toEqual(5);
    });
  });
});


