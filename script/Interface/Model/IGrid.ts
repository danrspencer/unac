/// <reference path="ISquare.ts" />

interface IGrid {

  getSquareById(id: string): ISquare;

  isGridFull(id: string): boolean;

}

export = IGrid;