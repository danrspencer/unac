/// <reference path="../vendor/underscore.d.ts" />
/// <reference path="../vendor/underscore-typed.d.ts" />
/// <reference path="../vendor/jquery.d.ts" />

/// <reference path="Model/Grid.ts" />

class Main {

  private _baseLevelClass = "base-level";

  private _player1Turn = true;

  private _player1Color = "rgba(255, 0, 0, 0.5)";

  private _player2Color = "rgba(0, 0, 255, 0.5)";

  private _grid: Grid;

  constructor() {

  }

  public render(ultimateness: number) {

    this._grid = new Grid("1", ultimateness);

    /*var grids = this.renderGrids(ultimateness);

    $('#board').html(grid);

    this.bindEvents();*/
  }

  /*private renderGrid(grid: Grid, targetDepth: number, depth: number): string[] {

    var content: Array;

    if (depth == targetDepth) {
      content = new Array();
    } else {

      var grids =

    }

    var template = _.template('<table class="grid <%= baseLevel %>">' +
                                 '<tr>' +
                                   '<td class="square top left"><%= content[0] %></td>' +
                                   '<td class="square top center"><%= content[1] %></td>' +
                                   '<td class="square top right"><%= content[2] %></td>' +
                                 '</tr>' +
                                 '<tr>' +
                                   '<td class="square middle left"><%= content[3] %></td>' +
                                   '<td class="square middle center"><%= content[4] %></td>' +
                                   '<td class="square middle right"><%= content[5] %></td>' +
                                 '</tr>' +
                                 '<tr>' +
                                   '<td class="square bottom left"><%= content[6] %></td>' +
                                   '<td class="square bottom center"><%= content[7] %></td>' +
                                   '<td class="square bottom right"><%= content[8] %></td>' +
                                 '</tr>' +
                              '</table>');

    return template(
      {
        content: content,
        baseLevel: baseLevel ? this._baseLevelClass : ""
      }
    );
  }*/

  private generateGridData(childData: Array) {

    var gridData = new Array();

    for(var g = 0; g < 9; g++) {

    }
  }

  private getSquareCoordinates($element: JQuery, currentAddress: string) {
    var colIndex = $element.index();
    var rowIndex = $element.parent().index();
    var gridIndex = (colIndex + (rowIndex * 3));
  }

  private getCurrentPlayerColor(): string {
    return this._player1Turn ? this._player1Color : this._player2Color;
  }

  // Event handlers
  private bindEvents() {

    $("." + this._baseLevelClass + " td")
      .mouseover((event) => this.onSquareMouseover(event))
      .mouseout((event) => this.onSquareMouseout(event))
      .click((event) => this.onSquareClicked(event));

  }

  private onSquareMouseover(event: JQueryMouseEventObject) {
    var $el = $(event.target);

    if ($el.attr("rel") !== "taken") {
      $el.animate({
        backgroundColor: this.getCurrentPlayerColor()
      });
    }
  }

  private onSquareMouseout(event: JQueryMouseEventObject) {
    var $el = $(event.target);

    if ($el.attr("rel") !== "taken") {
      $el.animate({
        backgroundColor: "rgba(255, 255, 255, 0.5)"
      });
    }
  }

  private onSquareClicked(event: JQueryMouseEventObject) {
    var $el = $(event.target);

    $el.attr("rel", "taken");

    $el = $el.parent().parent().parent().parent();
    $el.css("background-color", this.getCurrentPlayerColor());

    $el = $el.parent().parent().parent().parent();
    $el.css("background-color", this.getCurrentPlayerColor());

    this._player1Turn = !this._player1Turn;
  }
}