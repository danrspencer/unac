/// <reference path="../../interface/Factory/IGridFactory.ts" />

/// <reference path="../../interface/Model/IGrid.ts" />
/// <reference path="../../interface/Model/ISquare.ts" />

import Grid = require('../Model/Grid');
import Square = require('../Model/Square');

import GridPresenter = require('../Presenter/GridPresenter');
import SquarePresenter = require('../Presenter/SquarePresenter');

import GridView = require('../View/GridView');
import SquareView = require('../View/SquareView');

class GridFactory implements IGridFactory {

  public manufactureGrid(depth: number): IGrid {

    var squares = this.getSquares(depth);

    var grid = new Grid(squares);

    return grid;
  }

  private getSquares(depth: number): ISquare[] {

    var squares: ISquare[] = new Array(9);

    if (depth === 0) {
      for (var s = 0; s <= 8; s++) {
        squares[s] = new Square();
      }
    } else {
      for (var s = 0; s <= 8; s++) {
        var childSquares = this.getSquares(depth - 1);

        squares[s] = new Grid(childSquares);
      }
    }

    return squares;
  }

  private generateSquare(): Square {

    var model = new Square();
    var view = new SquareView();

    var presenter = new SquarePresenter(model, view);


  }

  private generateGrid(): Grid {

  }

}

export = GridFactory;