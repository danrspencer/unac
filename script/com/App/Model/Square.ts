/// <reference path="../../../vendor/underscore.d.ts" />
/// <reference path="../../../vendor/underscore-typed.d.ts" />

/// <reference path="ISquare.ts" />

/// <reference path="../../System/IEventHandler.ts" />
/// <reference path="../Event/IWinnerChangedEventArgs.ts" />

import wcea = require('../Event/WinnerChangedEventArgs');
import eh = require('../../System/EventHandler');

export class Square implements ISquare {

  private _winner: number;

  public winnerChanged: IEventHandler<IWinnerChangedEventArgs>;

  constructor() {
    this.winnerChanged = new eh.EventHandler<IWinnerChangedEventArgs>();
  }

  public setWinner(winner: number): boolean {

    var eventArgs = new wcea.WinnerChangedEventArgs();
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