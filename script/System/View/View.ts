
import IView = require('System/View/IView');

interface IView {

  element: JQuery;

  render(): IView;
}

export = IView;