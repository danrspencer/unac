/// <reference path="../../Vendor/jquery.d.ts" />
/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/underscore-typed.d.ts" />

import IView = require('Interface/View/IView');
import GridView = require ('App/View/GridView');

import AppViewHtml = require('App/View/AppView.html');

class AppView implements IView {

  private _container: JQuery;

  private _gridView: GridView;

    public setGridView(gridView: GridView) {
      this._gridView = gridView;

      this._gridView.render(this._container);
    }

  public render(container: JQuery) {

    var html = AppViewHtml({});

    container.html(html);
  }

}

export = AppView;