var SaveParser = (function () {
    function SaveParser(save) {
        var saveParts = save.split('.');

        this._player1Turn = saveParts[2] == "1";
        this._activeGrid = saveParts[3];
        this._gridData = saveParts[4];
    }
    SaveParser.prototype.getDepth = function () {
        var expectedLength = 10;
        var depth = 0;

        while (expectedLength != this._gridData.length) {
            depth++;

            expectedLength = (expectedLength * 9) + 1;
        }

        return depth;
    };

    SaveParser.prototype.getPlayer1Turn = function () {
        return this._player1Turn;
    };

    SaveParser.prototype.getGridData = function () {
        return this._gridData;
    };

    SaveParser.prototype.getActiveGrid = function () {
        return this._activeGrid;
    };
    return SaveParser;
})();
//@ sourceMappingURL=SaveParser.js.map
