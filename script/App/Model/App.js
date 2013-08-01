define(["require", "exports", 'App/Factory/GridFactory', 'App/Event/NumberSetEventArgs', 'System/Event/EventHandler'], function(require, exports, __GridFactory__, __NumberSetEventArgs__, __EventHandler__) {
    

    var GridFactory = __GridFactory__;
    var NumberSetEventArgs = __NumberSetEventArgs__;

    var EventHandler = __EventHandler__;

    var App = (function () {
        function App() {
            this.depthSet = new EventHandler.EventHandler();
        }
        return App;
    })();

    
    return App;
});
//@ sourceMappingURL=App.js.map
