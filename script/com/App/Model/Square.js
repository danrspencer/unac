define(["require", "exports", '../Event/WinnerChangedEventArgs', '../../System/EventHandler'], function(require, exports, __wcea__, __eh__) {
    var wcea = __wcea__;
    var eh = __eh__;

    var Square = (function () {
        function Square() {
            this.winnerChanged = new eh.EventHandler();
        }
        Square.prototype.setWinner = function (winner) {
            var eventArgs = new wcea.WinnerChangedEventArgs();
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
    exports.Square = Square;
});
//@ sourceMappingURL=Square.js.map
