/// <reference path="IGrid.ts" />
/// <reference path="../Helper/IEvent.ts" />

interface ISquare {

  id: string;

  onWinnerChanged: IEvent;

  render(): string;

  setWinner(winner: number): bool;

  getWinner(): number;

}