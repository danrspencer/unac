/// <require path="../App/Model/IGrid.ts" />
/// <require path="../App/Model/ISquare.ts" />

import grid = require('../App/Model/Grid');
import square = require('../App/Model/Square');

import eventHandler = require('../System/EventHandler');

export class GridFactory {

  public manufactureGrid(depth: number): IGrid {



  }

  private getSquares(depth: number): ISquare[] {

    var squares = ISquare[9];
    var squareClass = depth === 0 ? grid.Grid : square.Square;

    if (depth === 0) {
      for (var s = 0; s <= 8; s++) {
        squares[s] = new squareClass();
      }
    } else {
      for (var s = 0; s <= 8; s++) {
        squares[s] = new squareClass();
      }
    }



  }

}