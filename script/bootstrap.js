define(["require", "exports", 'App/Model/App', 'App/Presenter/AppPresenter', 'App/View/AppView', 'App/Factory/GridFactory'], function(require, exports, __App__, __AppPresenter__, __AppView__, __GridFactory__) {
    var App = __App__;
    var AppPresenter = __AppPresenter__;
    var AppView = __AppView__;
    var GridFactory = __GridFactory__;

    var app = new App();
    var appView = new AppView();
    var appPresenter = new AppPresenter(appView, app);

    var gridFactory = new GridFactory(app, appView);

    appView.render($('body'));
});
//@ sourceMappingURL=bootstrap.js.map
