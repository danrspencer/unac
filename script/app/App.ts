/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="../interface/Model/IGrid.ts" />
/// <reference path="../interface/Factory/IGridFactory.ts" />

/// <reference path="../interface/Helper/ISaveParser.ts" />


class App {

  private _gridFactory: IGridFactory;

  private _grid: IGrid;

  constructor(gridFactory: IGridFactory) {
    this._gridFactory = gridFactory;
  }

  public start(depth: number) {

    this._grid = this._gridFactory.manufactureGrid(depth);


  }

}

export = App;