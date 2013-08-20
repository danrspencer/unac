define(["require", "exports", 'App/Factory/GridFactory', 'System/Event/EventableType'], function(require, exports, __GridFactory__, __EventableType__) {
    
    var GridFactory = __GridFactory__;

    var EventableType = __EventableType__;

    var App = (function () {
        /*****/
        function App(gridDepth) {
            this.gridDepth = gridDepth;
        }
        App.prototype.setGridDepth = function (value) {
            this._gridDepth = value;

            this.gridDepthChanged.trigger(value);
        };
        App.prototype.getGridDepth = function () {
            return this._gridDepth;
        };
        return App;
    })();

    
    return App;
});
//# sourceMappingURL=App.js.map
