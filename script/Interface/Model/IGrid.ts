import ISquare = require('Interface/Model/ISquare');


interface IGrid {

  getSquareById(id: string): ISquare;

  isGridFull(id: string): boolean;

}

export = IGrid;