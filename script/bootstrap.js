/// <reference path="Vendor/jquery.d.ts" />
define(["require", "exports", 'System/Event/EventFactory', 'App/Model/App', 'App/Presenter/AppPresenter', 'App/View/AppView', 'App/Factory/GridModelFactory'], function(require, exports, __EventFactory__, __App__, __AppPresenter__, __AppView__, __GridModelFactory__) {
    var EventFactory = __EventFactory__;

    var App = __App__;
    var AppPresenter = __AppPresenter__;
    var AppView = __AppView__;
    var GridModelFactory = __GridModelFactory__;

    var eventFactory = new EventFactory();
    var gridFactory = new GridModelFactory();

    var app = new App(eventFactory, gridFactory);
    var appView = new AppView();
    var appPresenter = new AppPresenter(appView, app);

    appView.render();

    $('body').append(appView.element);

    app.setGridDepth(2);
});
//# sourceMappingURL=bootstrap.js.map
