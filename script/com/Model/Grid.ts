/// <reference path="../Helper/IEvent.ts" />
/// <reference path="../Helper/TypedEvent.ts" />

/// <reference path="IGrid.ts" />
/// <reference path="ISquare.ts" />

/// <reference path="Square.ts" />


class Grid implements IGrid, ISquare {

  public id: string;

  public winner: number;

  public onWinnerChanged: IEvent;

  public squares: ISquare[];

  private _template: string;

  constructor(id: string, depth: number, template: string) {

    this.id = id;

    this.onWinnerChanged = new TypedEvent();

    this.squares = new Array();

    for (var g = 0; g <= 8; g++) {

      var squareId = id + ":" + g.toString();

      var square = depth > 0
                 ? new Grid(squareId, depth - 1)
                 : new Square(squareId);

      square.onWinnerChanged.add(() => this.calculateWinnerStatus());

      this.squares.push(square);
    }
  }

  private calculateWinnerStatus() {

  }

}