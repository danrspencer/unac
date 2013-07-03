/// <reference path="../../vendor/underscore.d.ts" />
/// <reference path="../../vendor/underscore-typed.d.ts" />
/// <reference path="../../vendor/jquery.d.ts" />

/// <reference path="../Helper/IEvent.ts" />
/// <reference path="../Helper/TypedEvent.ts" />

/// <reference path="IGrid.ts" />
/// <reference path="ISquare.ts" />

/// <reference path="Square.ts" />


class Grid implements IGrid, ISquare {

  public id: string;

  public onWinnerChanged: IEvent;

  private _winner: number;

  private _squares: ISquare[];

  // Offers a way to use the grid interface on children
  private _grids: IGrid[];

  private _template: string;

  constructor(id: string, depth: number) {

    this.id = id;

    this.onWinnerChanged = new TypedEvent();

    this._squares = new Array();
    this._grids = new Array();

    for (var g = 0; g <= 8; g++) {

      var squareId = id + g.toString();

      var square:  ISquare;

      if (depth > 0) {
        var grid = new Grid(squareId, depth - 1);

        square = grid;

        this._grids.push(grid);

      } else {
        square = new Square(squareId);
      }

      square.onWinnerChanged.add(() => this.squareWon());

      this._squares.push(square);
    }
  }

  public render(): string {
    var template = _.template('<table class="grid">' +
                                '<tr>' +
                                  '<td data-square="<%= content[0].id %>" class="square top left"><%= content[0].render() %></td>' +
                                  '<td data-square="<%= content[1].id %>" class="square top center"><%= content[1].render() %></td>' +
                                  '<td data-square="<%= content[2].id %>" class="square top right"><%= content[2].render() %></td>' +
                                '</tr>' +
                                '<tr>' +
                                  '<td data-square="<%= content[3].id %>" class="square middle left"><%= content[3].render() %></td>' +
                                  '<td data-square="<%= content[4].id %>" class="square middle center"><%= content[4].render() %></td>' +
                                  '<td data-square="<%= content[5].id %>" class="square middle right"><%= content[5].render() %></td>' +
                                '</tr>' +
                                '<tr>' +
                                  '<td data-square="<%= content[6].id %>" class="square bottom left"><%= content[6].render() %></td>' +
                                  '<td data-square="<%= content[7].id %>" class="square bottom center"><%= content[7].render() %></td>' +
                                  '<td data-square="<%= content[8].id %>" class="square bottom right"><%= content[8].render() %></td>' +
                                '</tr>' +
                              '</table>');

    return template({
      content: this._squares
    });
  }

  public getSquareById(id: string): ISquare {

    if (id.length > 1) {
      var nextSquareId = id.substr(0, 1);
      var remainingId = id.substr(1);

      return this._grids[nextSquareId].getSquareById(remainingId);
    }

    return this._squares[id];
  }

  public setWinner(winner: number) {

    console.log("Unable to set winner directly on a grid object.");
  }

  public getWinner(): number {
    return this._winner;
  }

  private squareWon() {

    this._squares.forEach(function(square: ISquare) {

      var $square = $('*[data-square="' + square.id + '"]');

      var winner = square.getWinner();

      if (winner === 1) {
        $square.addClass("p1owned");
      } else if (winner === 2) {
        $square.addClass("p2owned");
      }

      /*$square = $square.parent().parent().parent().parent();
      $square.css("background-color", "red");

      $square = $square.parent().parent().parent().parent();
      $square.css("background-color", this.getCurrentPlayerColor());*/

    });

  }

}