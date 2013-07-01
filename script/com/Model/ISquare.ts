/// <reference path="IGrid.ts" />
/// <reference path="../Helper/IEvent.ts" />

interface ISquare {

  id: string;

  winner: number;

  onWinnerChanged: IEvent;

}