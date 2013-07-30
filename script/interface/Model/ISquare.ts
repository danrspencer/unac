
/// <reference path="../System/IEventHandler.ts" />
/// <reference path="../../app/Event/WinnerChangedEventArgs.ts" />

interface ISquare {

  winnerChanged: IEventHandler<WinnerChangedEventArgs>;

  setWinner(winner: number): boolean;

  getWinner(): number;

  getStateString(): string;

}