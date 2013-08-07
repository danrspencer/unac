define(["require", "exports", 'App/View/AppView.html'], function(require, exports, __AppViewHtml__) {
    
    

    var AppViewHtml = __AppViewHtml__;

    var AppView = (function () {
        function AppView() {
        }
        AppView.prototype.setGridView = function (gridView) {
            this._gridView = gridView;

            this._gridView.render(this._container);
        };

        AppView.prototype.render = function (container) {
            var html = AppViewHtml({});

            container.html(html);
        };
        return AppView;
    })();

    
    return AppView;
});
//@ sourceMappingURL=AppView.js.map
