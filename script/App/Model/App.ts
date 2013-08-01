import IGrid = require('Interface/Model/IGrid');

import GridFactory = require('App/Factory/GridFactory');
import NumberSetEventArgs = require('App/Event/NumberSetEventArgs');

import EventHandler = require('System/Event/EventHandler');

class App {

  public depthSet: EventHandler.EventHandler<NumberSetEventArgs>;

  constructor() {
    this.depthSet = new EventHandler.EventHandler<NumberSetEventArgs>();
  }

}

export = App;