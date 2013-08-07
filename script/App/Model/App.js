define(["require", "exports", 'App/Event/NumberSetEventArgs', 'System/Event/EventHandler'], function(require, exports, __NumberSetEventArgs__, __EventHandler__) {
    

    
    var NumberSetEventArgs = __NumberSetEventArgs__;

    var EventHandler = __EventHandler__;

    var App = (function () {
        function App() {
            this.gridDepthSet = new EventHandler.EventHandler();
        }
        App.prototype.setGridDepth = function (gridDepth) {
            this._gridDepth = gridDepth;

            var eventArgs = new NumberSetEventArgs(gridDepth);

            this.gridDepthSet.trigger(eventArgs);
        };
        return App;
    })();

    
    return App;
});
//@ sourceMappingURL=App.js.map
