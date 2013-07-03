/// <reference path="../../vendor/underscore.d.ts" />
/// <reference path="../../vendor/underscore-typed.d.ts" />
/// <reference path="../../vendor/jquery.d.ts" />

/// <reference path="ISquare.ts" />

/// <reference path="../Helper/TypedEvent.ts" />

class Square implements  ISquare {

  public id: string;

  public onWinnerChanged: IEvent;

  private _winner: number;

  constructor(id: string) {
    this.id = id;

    this.onWinnerChanged = new TypedEvent();

    this._winner = 0;
  }

  public render(): string {
    return '';
  }

  public setWinner(winner: number): bool {

    if (this._winner === 0) {
      this._winner = winner;
      this.onWinnerChanged.trigger();

      return true;
    }

    return false;
  }

  public getWinner(): number {
    return this._winner
  }

}