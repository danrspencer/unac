/// <reference path="../../Vendor/jquery.d.ts" />
/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/underscore-typed.d.ts" />

import IView = require('System/View/IView');
import GridView = require ('App/View/GridView');

import AppViewHtml = require('App/View/AppView.html');

class AppView implements IView {

  public element: JQuery;

  public render(): AppView {

    AppViewHtml.getHtml();

    return this;
  }

}

export = AppView;