import ISquare = require('Interface/Model/ISquare');

import EventableType = require('System/Event/EventableType');
import WinnerType = require('App/Enum/WinnerType');

class Square implements ISquare {

  public winnerChanged;

  public winner = new EventableType<WinnerType>(this);

  constructor() {

  }

  public getStateString(): string {
    return '';
  }
}

export = Square;