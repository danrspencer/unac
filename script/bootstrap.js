define(["require", "exports", 'com/Factory/GridFactory', 'com/App'], function(require, exports, __GridFactory__, __App__) {
    var GridFactory = __GridFactory__;
    var App = __App__;

    var gridFactory = new GridFactory.GridFactory();
    var app = new App.App(gridFactory);

    app.start(2);
});
//@ sourceMappingURL=bootstrap.js.map
