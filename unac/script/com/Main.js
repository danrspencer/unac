var Main = (function () {
    function Main() {
        this._player1Turn = true;
    }
    Main.prototype.render = function (ultimateness) {
        var _this = this;
        this._grid = new Grid("", ultimateness);
        this._grid.moveMade.add(function (id, winner, nextGridId) {
            return _this.onMoveMade(id, winner, nextGridId);
        });

        var gridHtml = this._grid.render();

        var $board = $('#board');

        $board.html(gridHtml);
        $board.click(function (event) {
            return _this.onSquareClicked(event);
        });

        var randomStartGrid = this.randomGrid(ultimateness);

        this.setActiveGrid(randomStartGrid);

        this.updateScoreBoard();
    };

    Main.prototype.onSquareClicked = function (event) {
        var square = this.getEventSquare(event);

        if (this._currentPlayGridId != "") {
            var gridId = square.id.substr(0, square.id.length - 1);

            if (this._currentPlayGridId != gridId) {
                console.log('Invalid move.');
                return;
            }
        }

        var winnerSet = square.setWinner(this._player1Turn ? 1 : 2);

        if (winnerSet == true) {
            this._player1Turn = !this._player1Turn;

            this.updateScoreBoard();
        }
    };

    Main.prototype.onMoveMade = function (id, winner, nextGridId) {
        this.setActiveGrid(nextGridId);
    };

    Main.prototype.getEventSquare = function (event) {
        var squareId = String($(event.toElement).data("square"));

        var square = this._grid.getSquareById(squareId);

        return square;
    };

    Main.prototype.setActiveGrid = function (id) {
        this._currentPlayGridId = id;

        var $td = $('td');

        if (this._grid.isGridFull(id) == true) {
            this._currentPlayGridId = "";

            $td.addClass("activeSquare");
            $td.removeClass("inactiveSquare");
            return;
        }

        $td.removeClass("activeSquare");
        $td.addClass("inactiveSquare");

        while (id.length > 0) {
            var $activeSquare = $('*[data-square="' + id + '"]');

            $activeSquare.addClass("activeSquare");
            $activeSquare.removeClass("inactiveSquare");

            id = id.substr(0, id.length - 1);
        }
    };

    Main.prototype.randomGrid = function (depth, currentId) {
        var randomId = String(Math.round(Math.random() * 8));

        if (depth > 1) {
            randomId += this.randomGrid(depth - 1, randomId);
        }

        return randomId;
    };

    Main.prototype.updateScoreBoard = function () {
        if (this._player1Turn) {
            $("#p1").addClass("p1owned");
            $("#p2").removeClass("p2owned");
        } else {
            $("#p1").removeClass("p1owned");
            $("#p2").addClass("p2owned");
        }
    };
    return Main;
})();
//@ sourceMappingURL=Main.js.map
