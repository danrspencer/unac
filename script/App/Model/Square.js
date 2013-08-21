define(["require", "exports", 'System/Event/EventableType', 'App/Enum/WinnerType'], function(require, exports, __EventableType__, __WinnerType__) {
    

    var EventableType = __EventableType__;
    var WinnerType = __WinnerType__;

    var Square = (function () {
        function Square() {
            this.winner = new EventableType(this);
        }
        Square.prototype.getStateString = function () {
            return '';
        };
        return Square;
    })();

    
    return Square;
});
//# sourceMappingURL=Square.js.map
