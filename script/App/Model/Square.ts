import ISquare = require('Interface/Model/ISquare');

import WinnerChangedEventArgs = require('App/Event/WinnerChangedEventArgs');
import EventHandler = require('System/Event/EventHandler');

class Square implements ISquare {

  private _winner: number;

  public winnerChanged: EventHandler.EventHandler<WinnerChangedEventArgs>;

  constructor() {
    this.winnerChanged = new EventHandler.EventHandler<WinnerChangedEventArgs>();
  }

  public setWinner(winner: number): boolean {

    var eventArgs = new WinnerChangedEventArgs();
    eventArgs.id = '1';
    eventArgs.winner = this._winner;

    this.winnerChanged.trigger(eventArgs);

    return true;
  }

  public getWinner(): number {
    return 0;
  }

  public getStateString(): string {
    return '';
  }
}

export = Square;