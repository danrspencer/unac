define(["require", "exports", 'App/Model/Grid', 'App/Presenter/GridPresenter', 'App/View/GridView', 'App/Model/Square', 'App/Presenter/SquarePresenter', 'App/View/SquareView'], function(require, exports, __Grid__, __GridPresenter__, __GridView__, __Square__, __SquarePresenter__, __SquareView__) {
    
    

    var Grid = __Grid__;
    var GridPresenter = __GridPresenter__;
    var GridView = __GridView__;
    var Square = __Square__;
    var SquarePresenter = __SquarePresenter__;
    var SquareView = __SquareView__;

    var GridFactory = (function () {
        function GridFactory() {
        }
        GridFactory.prototype.manufactureGrid = function (depth) {
            var squares = this.getSquares(depth);

            var grid = new Grid(squares);

            return grid;
        };

        GridFactory.prototype.getSquares = function (depth) {
            var squares = new Array(9);

            if (depth === 0) {
                for (var s = 0; s <= 8; s++) {
                    squares[s] = new Square();
                }
            } else {
                for (var s = 0; s <= 8; s++) {
                    var childSquares = this.getSquares(depth - 1);

                    squares[s] = new Grid(childSquares);
                }
            }

            return squares;
        };

        GridFactory.prototype.generateSquare = function () {
            var model = new Square();
            var view = new SquareView();

            var presenter = new SquarePresenter(model, view);
        };

        GridFactory.prototype.generateGrid = function () {
        };
        return GridFactory;
    })();

    
    return GridFactory;
});
//@ sourceMappingURL=GridFactory.js.map
