
/// <reference path="../../vendor/underscore.d.ts" />
/// <reference path="../../vendor/jquery.d.ts" />

/// <reference path="../../interface/View/IGridView.ts" />
/// <reference path="../../interface/View/ISquareView.ts" />

import template = require ('./GridView.html');

class GridView implements IGridView, ISquareView {

  constructor(squares: ISquareView[]) {

  }

  public render(container: JQuery) {

  }

}

export = GridView;