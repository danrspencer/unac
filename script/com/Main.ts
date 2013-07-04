/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="Model/Grid.ts" />

class Main {

  private _player1Turn = true;

  private _grid: Grid;

  private _currentPlayGridId;

  constructor() {

  }

  public render(ultimateness: number) {

    this._grid = new Grid("", ultimateness);
    this._grid.moveMade.add((id, winner, nextGridId) => this.onMoveMade(id, winner, nextGridId));

    var gridHtml = this._grid.render();

    var $board = $('#board');

    $board.html(gridHtml);

    $board.click((event) => this.onSquareClicked(event));
    //.mouseover((event) => this.onSquareMouseover(event))
    //.mouseout((event) => this.onSquareMouseout(event))

    var randomStartGrid = this.randomGrid(ultimateness);

    this.setActiveGrid(randomStartGrid);
  }

  /*private onSquareMouseover(event: JQueryMouseEventObject) {


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
  }*/

  private onSquareClicked(event: JQueryMouseEventObject) {

    var square = this.getEventSquare(event);

    if (this._currentPlayGridId !== "") {

      var gridId = square.id.substr(0, square.id.length - 1);

      if (this._currentPlayGridId !== gridId) {

        alert('Invalid move.');
        return;
      }
    }

    var winnerSet = square.setWinner(this._player1Turn ? 1 : 2);

    if (winnerSet === true) {
      this._player1Turn = !this._player1Turn;
    }
  }

  private onMoveMade(id: string, winner: number, nextGridId: string) {

    this.setActiveGrid(nextGridId);
  }

  private getEventSquare(event: JQueryMouseEventObject): ISquare {
    var squareId = String($(event.toElement).data("square"));

    var square = this._grid.getSquareById(squareId);

    return square;
  }

  private setActiveGrid(id: string) {
    this._currentPlayGridId = id;

    var $td = $('td');

    if (this._grid.isGridFull(id) === true) {
      this._currentPlayGridId = "";

      $td.addClass("activeSquare");
      $td.removeClass("inactiveSquare");
      return;
    }

    $td.removeClass("activeSquare");
    $td.addClass("inactiveSquare");

    while (id.length > 0) {

      var $activeSquare = $('*[data-square="' + id + '"]');

      $activeSquare.addClass("activeSquare");
      $activeSquare.removeClass("inactiveSquare");

      id = id.substr(0, id.length-1);
    }
  }

  private randomGrid(depth: number, currentId?: string): string{

    var randomId = String(Math.round(Math.random()*8));

    if (depth > 1) {
      randomId += this.randomGrid(depth - 1, randomId);
    }

    return randomId;
  }

}