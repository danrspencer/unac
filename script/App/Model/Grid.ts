import IGrid = require('Interface/Model/IGrid');
import ISquare = require('Interface/Model/ISquare');

import WinnerType = require('App/Enum/WinnerType');

import EventableType = require('System/Event/EventableType');
import EventFactory = require('System/Event/EventFactory');


class Grid implements IGrid, ISquare {

  public winner: EventableType<WinnerType>;

  constructor(eventFactory: EventFactory, squares: ISquare[]) {
    this.winner = eventFactory.getEventableType<WinnerType>(this);
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