import IGrid = require('Interface/Model/IGrid');
import ISquare = require('Interface/Model/ISquare');
import IGridView = require('Interface/View/IGridView');
import ISquareView = require('Interface/View/ISquareView');

import App = require('App/Model/App');
import AppView = require('App/View/AppView');
import Grid = require('App/Model/Grid');
import GridPresenter = require('App/Presenter/GridPresenter');
import GridView = require('App/View/GridView');
import Square = require('App/Model/Square');
import SquarePresenter = require('App/Presenter/SquarePresenter');
import SquareView = require('App/View/SquareView');

// ---------------------

class GridFactory {

  private _app: App;

  private _appView: AppView;

  constructor(app: App, appView: AppView) {

    this._app = app;
    this._appView = appView;

    this._app.gridDepth.assigned.add(this.appModel_gridDepthChanged, this);
  }

  private appModel_gridDepthChanged(args: number) {
    this.manufactureGrid(args);
  }

  private manufactureGrid(depth: number) {

    var squareViews: ISquareView[] = new Array(9);
    var squareModels: ISquare[] = new Array(9);

    this.generateSquares(depth, squareViews, squareModels);

    var gridView = new GridView(squareViews);
    var grid = new Grid(squareModels);

    var presenter = new GridPresenter(gridView, grid);

    this._appView.setGridView(gridView);
  }

  private generateSquares(depth: number, views: ISquareView[], models: ISquare[]) {

    if (depth === 0) {

      this.generateTrueSquares(views, models);

    } else {

      this.generateGridSquares(depth, views, models);
    }
  }

  private generateTrueSquares(views: ISquareView[], models: ISquare[]) {
    for (var n = 0; n <= 8; n++) {

      var squareView = new SquareView();
      var square = new Square();

      var presenter = new SquarePresenter(squareView, square);

      views[n] = squareView;
      models[n] = square;
    }
  }

  private generateGridSquares(depth: number, views: ISquareView[], models: ISquare[]) {
    for (var n = 0; n <= 8; n++) {

      var squareViews: ISquareView[] = new Array(9);
      var squareModels: ISquare[] = new Array(9);

      this.generateSquares(depth - 1, squareViews, squareModels);

      var gridView = new GridView(squareViews);
      var grid = new Grid(squareModels);

      var presenter = new GridPresenter(gridView, grid);

      views[n] = gridView;
      models[n] = grid;
    }
  }
}

export = GridFactory;