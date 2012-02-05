var List = {

  things: []

  ,add_thing: function(thing) {
    this.things.unshift(thing);

    if (this.things.length > 5) {
      this.things.pop();
    }
  }
};

