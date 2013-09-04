define(["require", "exports", 'App/View/AppView', 'App/Model/Grid', 'App/Presenter/GridPresenter', 'App/View/GridView', 'App/Model/Square', 'App/Presenter/SquarePresenter', 'App/View/SquareView'], function(require, exports, __AppView__, __Grid__, __GridPresenter__, __GridView__, __Square__, __SquarePresenter__, __SquareView__) {
    
    
    
    

    
    var AppView = __AppView__;
    var Grid = __Grid__;
    var GridPresenter = __GridPresenter__;
    var GridView = __GridView__;
    var Square = __Square__;
    var SquarePresenter = __SquarePresenter__;
    var SquareView = __SquareView__;

    // ---------------------
    var GridModelFactory = (function () {
        function GridModelFactory() {
        }
        GridModelFactory.prototype.manufactureGrid = function (depth) {
            var squareViews = new Array(9);
            var squareModels = new Array(9);

            this.generateSquares(depth, squareViews, squareModels);

            var gridView = new GridView(squareViews);
            //var grid = new Grid(squareModels);
            //var presenter = new GridPresenter(gridView, grid);
            //this._appView.setGridView(gridView);
        };

        GridModelFactory.prototype.generateSquares = function (depth, views, models) {
            if (depth === 0) {
                this.generateTrueSquares(views, models);
            } else {
                this.generateGridSquares(depth, views, models);
            }
        };

        GridModelFactory.prototype.generateTrueSquares = function (views, models) {
            for (var n = 0; n <= 8; n++) {
                var squareView = new SquareView();
                var square = new Square();

                var presenter = new SquarePresenter(squareView, square);

                views[n] = squareView;
                models[n] = square;
            }
        };

        GridModelFactory.prototype.generateGridSquares = function (depth, views, models) {
            /*for (var n = 0; n <= 8; n++) {
            
            var squareViews: ISquareView[] = new Array(9);
            var squareModels: ISquare[] = new Array(9);
            
            this.generateSquares(depth - 1, squareViews, squareModels);
            
            var gridView = new GridView(squareViews);
            // var grid = new Grid(squareModels);
            
            var presenter = new GridPresenter(gridView, grid);
            
            views[n] = gridView;
            models[n] = grid;
            }*/
        };
        return GridModelFactory;
    })();

    
    return GridModelFactory;
});
//# sourceMappingURL=GridModelFactory.js.map
