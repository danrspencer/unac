define(["require", "exports", 'com/Factory/GridFactory', 'com/App'], function(require, exports, __gf__, __a__) {
    var gf = __gf__;
    var a = __a__;

    var gridFactory = new gf.GridFactory();
    var app = new a.App(gridFactory);

    app.start(2);
});
//@ sourceMappingURL=container.js.map
