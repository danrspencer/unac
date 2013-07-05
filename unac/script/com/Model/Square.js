var Square = (function () {
    function Square(id) {
        this.id = id;

        this.moveMade = new TypedEvent();

        this._winner = 0;
    }
    Square.prototype.render = function () {
        return '';
    };

    Square.prototype.setWinner = function (winner) {
        if (this._winner == 0) {
            this._winner = winner;

            var parentParentId = this.id.substr(0, this.id.length - 2);
            var squareId = this.id.substr(this.id.length - 1);

            var nextGridId = parentParentId + squareId;

            this.moveMade.trigger(this.id, winner, nextGridId);

            return true;
        }

        return false;
    };

    Square.prototype.getWinner = function () {
        return this._winner;
    };
    return Square;
})();
//@ sourceMappingURL=Square.js.map
