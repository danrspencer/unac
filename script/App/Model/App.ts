import IGrid = require('Interface/Model/IGrid');

import GridFactory = require('App/Factory/GridFactory');
import NumberSetEventArgs = require('App/Event/NumberSetEventArgs');

import EventHandler = require('System/Event/EventHandler');

class App {

  public gridDepthSet: EventHandler.EventHandler<NumberSetEventArgs>;

  private _gridDepth: number;
    public setGridDepth(gridDepth: number)
    {
      this._gridDepth = gridDepth;

      var eventArgs = new NumberSetEventArgs(gridDepth);

      this.gridDepthSet.trigger(eventArgs);
    }

  constructor() {
    this.gridDepthSet = new EventHandler.EventHandler<NumberSetEventArgs>();
  }

}

export = App;