/// <reference path="IGrid.ts" />
/// <reference path="../Helper/IMoveMadeEvent.ts" />

interface ISquare {

  id: string;

  moveMade: IMoveMadeEvent;

  render(): string;

  setWinner(winner: number): boolean;

  getWinner(): number;

  getStateString(): string;

}