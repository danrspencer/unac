import IGrid = require('Interface/Model/IGrid');
import ISquare = require('Interface/Model/Square');

import Grid = require('App/Model/Grid');
import GridPresenter = require('App/Presenter/GridPresenter');
import GridView = require('App/View/GridView');
import Square = require('App/Model/Square');
import SquarePresenter = require('App/Presenter/SquarePresenter');
import SquareView = require('App/View/SquareView');

class GridFactory {

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