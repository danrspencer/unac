/// <reference path=".././underscore.d.ts" />
/// <reference path=".././underscore-typed.d.ts" />

/// <reference path=".././System/IEventHandler.ts" />

/// <reference path=".././Model/IGrid.ts" />
/// <reference path=".././Model/ISquare.ts" />


class Grid implements IGrid, ISquare {

  public winnerChanged: IEventHandler<Object>;

  constructor(squares: ISquare[]) {

  }

  public getSquareById(id: string): ISquare {
    return null;
  }

  public isGridFull(id: string): boolean {
    return false;
  }

  public setWinner(winner: number): boolean {
    return false;
  }

  public getWinner(): number {
    return 0;
  }

  public getStateString(): string {
    return '';
  }

}

export = Grid;