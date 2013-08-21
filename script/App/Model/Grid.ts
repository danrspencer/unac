import IGrid = require('Interface/Model/IGrid');
import ISquare = require('Interface/Model/ISquare');

import EventableType = require('System/Event/EventableType');
import WinnerType = require('App/Enum/WinnerType');

class Grid implements IGrid, ISquare {

  public winner = new EventableType<WinnerType>(this);

  constructor(squares: ISquare[]) {

  }

  public getSquareById(id: string): ISquare {
    return null;
  }

  public isGridFull(id: string): boolean {
    return false;
  }

  public getStateString(): string {
    return '';
  }

}

export = Grid;