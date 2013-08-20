import IGrid = require('Interface/Model/IGrid');
import GridFactory = require('App/Factory/GridFactory');

import EventableType = require('System/Event/EventableType');

class App {

  /*****/

  public gridDepthChanged: EventHandler<number>;

  private _gridDepth: number;
    public setGridDepth(value: number) {
      this._gridDepth = value;

      this.gridDepthChanged.trigger(value);
    }
    public getGridDepth() {
      return this._gridDepth;
    }

  /*****/

  public gridDepth: EventableType<number>;

  /*****/

  constructor(gridDepth: EventableType<number>) {
    this.gridDepth = gridDepth;
  }

}

export = App;