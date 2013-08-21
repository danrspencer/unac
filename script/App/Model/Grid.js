define(["require", "exports", 'System/Event/EventableType', 'App/Enum/WinnerType'], function(require, exports, __EventableType__, __WinnerType__) {
    
    

    var EventableType = __EventableType__;
    var WinnerType = __WinnerType__;

    var Grid = (function () {
        function Grid(squares) {
            this.winner = new EventableType(this);
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
