define(["require", "exports", 'App/Event/WinnerChangedEventArgs', 'System/Event/EventHandler'], function(require, exports, __WinnerChangedEventArgs__, __EventHandler__) {
    

    var WinnerChangedEventArgs = __WinnerChangedEventArgs__;
    var EventHandler = __EventHandler__;

    var Square = (function () {
        function Square() {
            this.winnerChanged = new EventHandler.EventHandler();
        }
        Square.prototype.setWinner = function (winner) {
            var eventArgs = new WinnerChangedEventArgs();
            eventArgs.id = '1';
            eventArgs.winner = this._winner;

            this.winnerChanged.trigger(eventArgs);

            return true;
        };

        Square.prototype.getWinner = function () {
            return 0;
        };

        Square.prototype.getStateString = function () {
            return '';
        };
        return Square;
    })();

    
    return Square;
});
//@ sourceMappingURL=Square.js.map
