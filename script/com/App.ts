/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="Model/Grid.ts" />

/// <reference path="Helper/SaveParser.ts" />

class App {

  private _player1Turn = true;

  private _grid: Grid;

  private _currentPlayGridId;

  constructor() {

  }

  public render(ultimateness: number) {

    var saveData = window.location.hash.substr(1);

    var activeGrid: string;

    if (saveData.length > 1) {
      var saveParser = new SaveParser(saveData);

      this._grid = new Grid("", saveParser.getDepth(), saveParser.getGridData());
      this._player1Turn = saveParser.getPlayer1Turn();

      activeGrid = saveParser.getActiveGrid();
    } else {
      this._grid = new Grid("", ultimateness, "");

      activeGrid = this.randomGrid(ultimateness);
    }


    this._grid.moveMade.add((id, winner, nextGridId) => this.onMoveMade(id, winner, nextGridId));

    var gridHtml = this._grid.render();

    var $board = $('#board');

    $board.html(gridHtml);
    $board.click((event) => this.onSquareClicked(event));

    this.setActiveGrid(activeGrid);

    this.updateScoreBoard();

  }

  private onSquareClicked(event: JQueryMouseEventObject) {

    var square = this.getEventSquare(event);

    if (this._currentPlayGridId != "") {

      var gridId = square.id.substr(0, square.id.length - 1);

      if (this._currentPlayGridId != gridId) {

        console.log('Invalid move.');
        return;
      }
    }

    var winnerSet = square.setWinner(this._player1Turn ? 1 : 2);

    if (winnerSet == true) {
      this._player1Turn = !this._player1Turn;

      this.updateScoreBoard();
    }
  }

  private onMoveMade(id: string, winner: number, nextGridId: string) {

    this.setActiveGrid(nextGridId);

    var playerTurn = this._player1Turn ? 2 : 1;

    window.location.hash = "p1.p2." + playerTurn + "." + nextGridId + "." + this._grid.getStateString();
  }

  private getEventSquare(event: JQueryMouseEventObject): ISquare {
    var squareId = String($(event.toElement).data("square"));

    var square = this._grid.getSquareById(squareId);

    return square;
  }

  private setActiveGrid(id: string) {
    this._currentPlayGridId = id;

    var $td = $('td');

    if (this._grid.isGridFull(id) == true) {
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

  private updateScoreBoard() {
    if (this._player1Turn) {
      $("#p1").addClass("p1owned");
      $("#p2").removeClass("p2owned");
    } else {
      $("#p1").removeClass("p1owned");
      $("#p2").addClass("p2owned");
    }
  }

}