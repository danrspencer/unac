
class SaveParser {

  private _player1Turn: bool;

  private _activeGrid: string;

  private _gridData: string;

  constructor(save: string) {
    var saveParts = save.split('.');

    this._player1Turn = saveParts[2] == "1";
    this._activeGrid = saveParts[3];
    this._gridData = saveParts[4];
  }

  public getDepth(): number {

    var expectedLength = 10;
    var depth = 0;

    while (expectedLength != this._gridData.length) {
      depth++;

      expectedLength = (expectedLength * 9) + 1;
    }

    return depth;
  }

  public getPlayer1Turn(): bool {
    return this._player1Turn;
  }

  public getGridData(): string {
    return this._gridData;
  }

  public getActiveGrid(): string {
    return this._activeGrid;
  }

}
