import IGrid = require('Interface/Model/IGrid');
import ISquare = require('Interface/Model/ISquare');


class Grid implements IGrid, ISquare {

  public winnerChanged: EventHandler<Object>;

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