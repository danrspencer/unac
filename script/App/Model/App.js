define(["require", "exports", 'App/Factory/GridFactory', 'System/Event/EventableType'], function(require, exports, __GridFactory__, __EventableType__) {
    
    var GridFactory = __GridFactory__;

    var EventableType = __EventableType__;

    var App = (function () {
        function App() {
            this.gridDepth = new EventableType(this);
        }
        return App;
    })();

    
    return App;
});
//# sourceMappingURL=App.js.map
