import ISquare = require('Interface/Model/ISquare');

import EventableType = require('System/Event/EventableType');
import WinnerType = require('App/Enum/WinnerType');

class Square implements ISquare {

  public winnerChanged;

  public winner: EventableType<WinnerType> = new EventableType<WinnerType>(this);

  constructor() {
    this.winner.set(WinnerType.Player1);


  }



  public getStateString(): string {
    return '';
  }
}

export = Square;