/// <reference path=".././underscore.d.ts" />
/// <reference path=".././jquery.d.ts" />

/// <reference path=".././View/IGridView.ts" />
/// <reference path=".././View/ISquareView.ts" />

import template = require ('./GridView.html.ts');

class GridView implements IGridView, ISquareView {

  constructor(squares: ISquareView[]) {

  }

  public render(container: JQuery) {

  }

}

export = GridView;