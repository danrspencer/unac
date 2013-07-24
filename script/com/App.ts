/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="App/Model/IGrid.ts" />
/// <reference path="Factory/IGridFactory.ts" />

/// <reference path="Helper/SaveParser.ts" />


export class App {

  private _grid: IGrid;

  constructor(grid: IGrid) {
    this._grid = grid;
  }

  public start(depth: number) {

  }

}