/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/jquery.d.ts" />

import IGridView = require('Interface/View/IGridView');
import ISquareView = require('Interface/View/ISquareView');

import GridViewHtml = require('App/View/GridView.html');
import SquareViewHtml = require('App/View/SquareView.html');

class GridView implements IGridView, ISquareView {



  constructor(squares: ISquareView[]) {

  }

  public render() {
    var html = GridViewHtml({

    });

    return html;
  }

}

export = GridView;