
describe("FizzBuzz", function() {

  var fb;
  beforeEach(function() {
    fb = new Object.beget(FizzBuzz);
  });

  afterEach(function() {
    fb = null;
  });

  it("#foo", function() {
    expect(FizzBuzz.foo()).toEqual(42);
  });
});

