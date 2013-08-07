/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/jquery.d.ts" />

import IGridView = require('Interface/View/IGridView');
import ISquareView = require('Interface/View/ISquareView');

import GridViewHtml = require ('App/View/GridView.html');

class GridView implements IGridView, ISquareView {

  constructor(squares: ISquareView[]) {

  }

  public render(container: JQuery) {

  }

}

export = GridView;