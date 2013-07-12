
import eh = require('./Events/EventHandler');

class Test {

  constructor() {
    var test: eh.EventHandler<Object>;

    //test.add(this.invalidHandler());
  }

  public validHandler(sender: Object, args: Object) {

  }

  public invalidHandler() {

  }
}