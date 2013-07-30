/// <reference path="./underscore.d.ts" />
/// <reference path="./underscore-typed.d.ts" />
/// <reference path="./jquery.d.ts" />

/// <reference path="./Model/IGrid.ts" />
/// <reference path="./Factory/IGridFactory.ts" />

/// <reference path="./Helper/ISaveParser.ts" />


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