
/// <reference path="../../System/IEventHandler.ts" />
/// <reference path="../Event/IWinnerChangedEventArgs.ts" />

interface ISquare {

  winnerChanged: IEventHandler<IWinnerChangedEventArgs>;

  setWinner(winner: number): boolean;

  getWinner(): number;

  getStateString(): string;

}