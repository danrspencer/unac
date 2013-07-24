define(["require", "exports", 'com/Factory/GridFactory', 'com/App'], function(require, exports, __gridFact__, __mainApp__) {
    var gridFact = __gridFact__;
    var mainApp = __mainApp__;

    var gridFactory = new gridFact.GridFactory();
    var app = new mainApp.App(gridFactory);

    app.start(2);
});
//@ sourceMappingURL=Bootstrap.js.map
