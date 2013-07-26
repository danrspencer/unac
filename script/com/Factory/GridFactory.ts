/// <require path="./IGridFactory.ts" />

/// <require path="../App/Model/IGrid.ts" />
/// <require path="../App/Model/ISquare.ts" />

import Grid = require('../App/Model/Grid');
import Square = require('../App/Model/Square');

export class GridFactory implements IGridFactory {

  public manufactureGrid(depth: number): IGrid {

    var squares = this.getSquares(depth);

    var grid = new Grid.Grid(squares);

    return grid;
  }

  private getSquares(depth: number): ISquare[] {

    var squares: ISquare[] = new Array(9);

    if (depth === 0) {
      for (var s = 0; s <= 8; s++) {
        squares[s] = new Square.Square();
      }
    } else {
      for (var s = 0; s <= 8; s++) {
        var childSquares = this.getSquares(depth - 1);

        squares[s] = new Grid.Grid(childSquares);
      }
    }

    return squares;
  }

}