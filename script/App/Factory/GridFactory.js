define(["require", "exports", 'App/Model/App', 'App/Model/Grid', 'App/Presenter/GridPresenter', 'App/View/GridView', 'App/Model/Square', 'App/Presenter/SquarePresenter', 'App/View/SquareView', 'App/Event/NumberSetEventArgs'], function(require, exports, __App__, __Grid__, __GridPresenter__, __GridView__, __Square__, __SquarePresenter__, __SquareView__, __NumberSetEventArgs__) {
    
    
    
    

    var App = __App__;
    
    var Grid = __Grid__;
    var GridPresenter = __GridPresenter__;
    var GridView = __GridView__;
    var Square = __Square__;
    var SquarePresenter = __SquarePresenter__;
    var SquareView = __SquareView__;

    var NumberSetEventArgs = __NumberSetEventArgs__;

    var GridFactory = (function () {
        function GridFactory(appModel, appView) {
            this._appModel = appModel;
            this._appView = appView;

            appModel.depthSet.add(this.app_onDepthSet);
        }
        GridFactory.prototype.app_onDepthSet = function (args) {
            this.manufactureGrid(2);
        };

        GridFactory.prototype.manufactureGrid = function (depth) {
            var squareViews = new Array(9);
            var squareModels = new Array(9);

            this.generateSquares(depth, squareViews, squareModels);

            var gridView = new GridView(squareViews);
            var grid = new Grid(squareModels);

            var presenter = new GridPresenter(gridView, grid);
        };

        GridFactory.prototype.generateSquares = function (depth, views, models) {
            if (depth === 0) {
                this.generateTrueSquares(views, models);
            } else {
                this.generateGridSquares(depth, views, models);
            }
        };

        GridFactory.prototype.generateTrueSquares = function (views, models) {
            for (var n = 0; n <= 8; n++) {
                var squareView = new SquareView();
                var square = new Square();

                var presenter = new SquarePresenter(squareView, square);

                views[n] = squareView;
                models[n] = square;
            }
        };

        GridFactory.prototype.generateGridSquares = function (depth, views, models) {
            for (var n = 0; n <= 8; n++) {
                var squareViews = new Array(9);
                var squareModels = new Array(9);

                this.generateSquares(depth - 1, squareViews, squareModels);

                var gridView = new GridView(squareViews);
                var grid = new Grid(squareModels);

                var presenter = new GridPresenter(gridView, grid);

                views[n] = gridView;
                models[n] = grid;
            }
        };
        return GridFactory;
    })();

    
    return GridFactory;
});
//@ sourceMappingURL=GridFactory.js.map