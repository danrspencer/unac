/// <reference path="../../vendor/underscore.d.ts" />
/// <reference path="../../vendor/underscore-typed.d.ts" />
/// <reference path="../../vendor/jquery.d.ts" />

/// <reference path="ISquare.ts" />

/// <reference path="../Helper/IMoveMadeEvent.ts" />
/// <reference path="../Helper/TypedEvent.ts" />

class Square implements  ISquare {

  public id: string;

  public moveMade: IMoveMadeEvent;

  private _winner: number;

  constructor(id: string) {
    this.id = id;

    this.moveMade = new TypedEvent();

    this._winner = 0;
  }

  public render(): string {
    return '';
  }

  public setWinner(winner: number): bool {

    if (this._winner == 0) {
      this._winner = winner;

      var parentParentId = this.id.substr(0, this.id.length-2);
      var squareId = this.id.substr(this.id.length-1);

      var nextGridId = parentParentId + squareId;

      this.moveMade.trigger(this.id, winner, nextGridId);

      return true;
    }

    return false;
  }

  public getWinner(): number {
    return this._winner
  }

  public getStateString(): string {
    return String(this._winner);
  }

}