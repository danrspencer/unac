define(["require", "exports", 'App/Model/Grid', 'App/View/GridView'], function(require, exports, __Grid__, __GridView__) {
    var Grid = __Grid__;
    var GridView = __GridView__;

    var GridPresenter = (function () {
        function GridPresenter(view, grid) {
            this._view = view;
            this._grid = grid;
        }
        return GridPresenter;
    })();

    
    return GridPresenter;
});
//# sourceMappingURL=GridPresenter.js.map
