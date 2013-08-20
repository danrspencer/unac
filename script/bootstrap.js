/// <reference path="Vendor/jquery.d.ts" />
define(["require", "exports", 'App/Model/App', 'App/Presenter/AppPresenter', 'App/View/AppView', 'App/Factory/GridFactory', 'System/Event/EventableType'], function(require, exports, __App__, __AppPresenter__, __AppView__, __GridFactory__, __EventableType__) {
    var App = __App__;

    var AppPresenter = __AppPresenter__;
    var AppView = __AppView__;
    var GridFactory = __GridFactory__;

    var EventableType = __EventableType__;

    // --------------------------------------
    var app = new App(new EventableType());
    var appView = new AppView();
    var appPresenter = new AppPresenter(appView, app);

    var gridFactory = new GridFactory(app, appView);

    $('body').html(appView.render());

    app.gridDepth.set(2);
});
//# sourceMappingURL=bootstrap.js.map
