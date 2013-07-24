/// <reference path="ISquare.ts" />
/// <reference path="Square.ts" />

interface IGrid {

  getSquareById(id: string): ISquare;

  isGridFull(id: string): boolean;

}