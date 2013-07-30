define(["require", "exports"], function(require, exports) {
    var App = (function () {
        function App(gridFactory) {
            this._gridFactory = gridFactory;
        }
        App.prototype.start = function (depth) {
            this._grid = this._gridFactory.manufactureGrid(depth);
        };
        return App;
    })();

    
    return App;
});
//@ sourceMappingURL=App.js.map
