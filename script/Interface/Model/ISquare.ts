import EventHandler = require('System/Event/EventHandler');
import WinnerChangedEventArgs = require('App/Event/WinnerChangedEventArgs');

interface ISquare {

  winnerChanged: EventHandler.EventHandler<WinnerChangedEventArgs>;

  setWinner(winner: number): boolean;

  getWinner(): number;

  getStateString(): string;

}

export = ISquare;