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

import NumberSetEventArgs = require('App/Event/NumberSetEventArgs');

// ---------------------

class GridFactory {

  private _appModel: App;

  private _appView: AppView;

  constructor(appModel: App, appView: AppView) {

    this._appModel = appModel;
    this._appView = appView;

    appModel.depthSet.add(this.app_onDepthSet);
  }

  private app_onDepthSet(args: NumberSetEventArgs) {
    this.manufactureGrid(2);
  }

  private manufactureGrid(depth: number) {

    var squareViews: ISquareView[] = new Array(9);
    var squareModels: ISquare[] = new Array(9);

    this.generateSquares(depth, squareViews, squareModels);

    var gridView = new GridView(squareViews);
    var grid = new Grid(squareModels);

    var presenter = new GridPresenter(gridView, grid);
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