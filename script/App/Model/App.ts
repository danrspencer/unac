import IGrid = require('Interface/Model/IGrid');
import GridFactory = require('App/Factory/GridFactory');

import EventableType = require('System/Event/EventableType');

class App {

  public gridDepth = new EventableType<number>(this);

  constructor() {

  }

}

export = App;