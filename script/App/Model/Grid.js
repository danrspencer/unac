define(["require", "exports", 'App/Enum/WinnerType', 'System/Event/EventableType', 'System/Event/EventFactory'], function(require, exports, __WinnerType__, __EventableType__, __EventFactory__) {
    
    

    var WinnerType = __WinnerType__;

    var EventableType = __EventableType__;
    var EventFactory = __EventFactory__;

    var Grid = (function () {
        function Grid(eventFactory, squares) {
            this.winner = eventFactory.getEventableType(this);
        }
        Grid.prototype.getSquareById = function (id) {
            return null;
        };

        Grid.prototype.isGridFull = function (id) {
            return false;
        };

        Grid.prototype.getStateString = function () {
            return '';
        };
        return Grid;
    })();

    
    return Grid;
});
//# sourceMappingURL=Grid.js.map
