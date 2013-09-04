/// <reference path="../../Vendor/jquery.d.ts" />

interface IView {

  element: JQuery;

  render(): IView;
}

export = IView;