import IGrid = require('Interface/Model/IGrid');

import GridModelFactory = require('App/Factory/GridModelFactory');

import EventableType = require('System/Event/EventableType');
import EventableArray = require('System/Event/EventableArray');
import EventFactory = require('System/Event/EventFactory');

class App {

  public grid: EventableArray<IGrid>;

  private _gridDepth: number;
    public setGridDepth(value: number) {
      this._gridDepth = value;

      this.createGrid();
    }

  private _gridModelFactory: GridModelFactory;

  constructor(eventFactory: EventFactory, gridModelFactory: GridModelFactory) {
    this.grid = eventFactory.getEventableArray<IGrid>();
  }

  private createGrid() {

    var grid = this._gridModelFactory.manufactureGrid(this._gridDepth);

    this.grid.set(grid);
  }

}

export = App;