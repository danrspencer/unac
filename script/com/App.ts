/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="App/Model/IGrid.ts" />
/// <reference path="Factory/IGridFactory.ts" />

/// <reference path="Helper/SaveParser.ts" />


export class App {

  private _gridFactory: IGridFactory;

  private _grid: IGrid;

  constructor(gridFactory: IGridFactory) {
    this._gridFactory = gridFactory;
  }

  public start(depth: number) {

    this._grid = this._gridFactory.manufactureGrid(depth);
  }

}