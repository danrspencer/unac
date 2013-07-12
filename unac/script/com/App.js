var App = (function () {
    function App() {
        this._player1Turn = true;
    }
    App.prototype.render = function (ultimateness) {
        var _this = this;
        var saveData = window.location.hash.substr(1);

        var activeGrid;

        if (saveData.length > 1) {
            var saveParser = new SaveParser(saveData);

            this._grid = new Grid("", saveParser.getDepth(), saveParser.getGridData());
            this._player1Turn = saveParser.getPlayer1Turn();

            activeGrid = saveParser.getActiveGrid();
        } else {
            this._grid = new Grid("", ultimateness, "");

            activeGrid = this.randomGrid(ultimateness);
        }

        this._grid.moveMade.add(function (id, winner, nextGridId) {
            return _this.onMoveMade(id, winner, nextGridId);
        });

        var gridHtml = this._grid.render();

        var $board = $('#board');

        $board.html(gridHtml);
        $board.click(function (event) {
            return _this.onSquareClicked(event);
        });

        this.setActiveGrid(activeGrid);

        this.updateScoreBoard();
    };

    App.prototype.onSquareClicked = function (event) {
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

    App.prototype.onMoveMade = function (id, winner, nextGridId) {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        document.title = $('#p1 input').val() + ' vs ' + $('#p2 input').val() + ' (' + datetime + ')';

        this.setActiveGrid(nextGridId);

        var playerTurn = this._player1Turn ? 2 : 1;

        window.location.hash = "p1.p2." + playerTurn + "." + nextGridId + "." + this._grid.getStateString();
    };

    App.prototype.getEventSquare = function (event) {
        var squareId = String($(event.target).data("square"));

        var square = this._grid.getSquareById(squareId);

        return square;
    };

    App.prototype.setActiveGrid = function (id) {
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

    App.prototype.randomGrid = function (depth) {
        var randomId = String(Math.round(Math.random() * 8));

        if (depth > 1) {
            randomId += this.randomGrid(depth - 1);
        }

        return randomId;
    };

    App.prototype.updateScoreBoard = function () {
        if (this._player1Turn) {
            $("#p1").addClass("p1owned");
            $("#p2").removeClass("p2owned");
        } else {
            $("#p1").removeClass("p1owned");
            $("#p2").addClass("p2owned");
        }
    };
    return App;
})();
//@ sourceMappingURL=App.js.map
