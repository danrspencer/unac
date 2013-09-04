define(["require", "exports", 'App/Factory/GridModelFactory', 'System/Event/EventableType', 'System/Event/EventableArray', 'System/Event/EventFactory'], function(require, exports, __GridModelFactory__, __EventableType__, __EventableArray__, __EventFactory__) {
    

    var GridModelFactory = __GridModelFactory__;

    var EventableType = __EventableType__;
    var EventableArray = __EventableArray__;
    var EventFactory = __EventFactory__;

    var App = (function () {
        function App(eventFactory, gridModelFactory) {
            this.grid = eventFactory.getEventableArray();
        }
        App.prototype.setGridDepth = function (value) {
            this._gridDepth = value;

            this.createGrid();
        };

        App.prototype.createGrid = function () {
            var grid = this._gridModelFactory.manufactureGrid(this._gridDepth);

            this.grid.set(grid);
        };
        return App;
    })();

    
    return App;
});
//# sourceMappingURL=App.js.map
