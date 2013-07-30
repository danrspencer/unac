define(["require", "exports", './app/Factory/GridFactory', './app/App'], function(require, exports, __GridFactory__, __App__) {
    var GridFactory = __GridFactory__;
    var App = __App__;

    var gridFactory = new GridFactory();
    var app = new App(gridFactory);

    app.start(2);
});
//@ sourceMappingURL=bootstrap.js.map
