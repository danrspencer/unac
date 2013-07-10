
class SaveParser {

  private _activeGrid: string;

  private _gridData: string;

  constructor(save: string) {
    var saveParts = save.split('.');

    this._activeGrid = saveParts[0];
    this._gridData = saveParts[1];
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

  public getGridData(): string {
    return this._gridData;
  }

  public getActiveGrid(): string {
    return this._activeGrid;
  }

}
