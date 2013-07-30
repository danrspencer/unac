import Grid = require('App/Model/Grid');
import GridView = require('App/View/GridView');

class GridPresenter {

  private _view: GridView;

  private _grid: Grid;

  constructor(view: GridView, grid: Grid) {
    this._view = view;
    this._grid = grid;
  }

}

export = GridPresenter;