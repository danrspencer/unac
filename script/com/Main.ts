/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="Model/Grid.ts" />

class Main {

  private _baseLevelClass = "base-level";

  private _player1Turn = true;

  private _player1Color = "";

  private _player2Color = "rgba(0, 0, 255, 0.5)";

  private _grid: Grid;

  constructor() {

  }

  public render(ultimateness: number) {

    this._grid = new Grid("", ultimateness);

    var gridHtml = this._grid.render();

    var $board = $('#board');

    $board.html(gridHtml);

    $board.mouseover((event) => this.onSquareMouseover(event))
          .mouseout((event) => this.onSquareMouseout(event))
          .click((event) => this.onSquareClicked(event));
  }

  private getCurrentPlayerColor(): string {
    return this._player1Turn ? this._player1Color : this._player2Color;
  }

  private onSquareMouseover(event: JQueryMouseEventObject) {


    return;
    var $el = $(event.target);

    if ($el.attr("rel") !== "taken") {
      $el.animate({
        backgroundColor: this.getCurrentPlayerColor()
      });
    }
  }

  private onSquareMouseout(event: JQueryMouseEventObject) {


    return;
    var $el = $(event.target);

    if ($el.attr("rel") !== "taken") {
      $el.animate({
        backgroundColor: "rgba(255, 255, 255, 0.5)"
      });
    }
  }

  private onSquareClicked(event: JQueryMouseEventObject) {

    var square = this.getEventSquare(event);

    square.setWinner(this._player1Turn ? 1 : 2);

    this._player1Turn = !this._player1Turn;
  }

  private getEventSquare(event: JQueryMouseEventObject): ISquare {
    var squareId = String($(event.toElement).data("square"));

    var square = this._grid.getSquareById(squareId);

    return square;
  }

}