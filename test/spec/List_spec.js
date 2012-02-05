describe("List", function() {

  var fb;
  beforeEach(function() {
    list = new Object.beget(List);
  });

  afterEach(function() {
    list = null;
  });

  it ('starts with an empty list of "things"', function() {
    expect(list.things.length).toEqual(0);
  });

  // describe("add_item", function() {
  //   it("#add_item", function() {
  //    expect(List.foo()).toEqual(42);
  //   });
  // });
});


