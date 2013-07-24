/// <reference path="../../../vendor/underscore.d.ts" />
/// <reference path="../../../vendor/underscore-typed.d.ts" />

/// <reference path="../../System/IEventHandler.ts" />

/// <reference path="IGrid.ts" />
/// <reference path="ISquare.ts" />


export class Grid implements IGrid, ISquare {

  public winnerChanged: IEventHandler<Object>;

  constructor(squares: ISquare[]) {

  }

  public getSquareById(id: string): ISquare {

  }

  public isGridFull(id: string): boolean {

  }

  public setWinner(winner: number): boolean {

  }

  public getWinner(): number {

  }

  public getStateString(): string {

  }

}