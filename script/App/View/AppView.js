/// <reference path="../../Vendor/jquery.d.ts" />
/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/underscore-typed.d.ts" />
define(["require", "exports", 'App/View/GridView', 'App/View/AppView.html'], function(require, exports, __GridView__, __AppViewHtml__) {
    
    var GridView = __GridView__;

    var AppViewHtml = __AppViewHtml__;

    var AppView = (function () {
        function AppView() {
        }
        AppView.prototype.setGridView = function (gridView) {
            this._gridView = gridView;

            $('#gridContainer').html(this._gridView.render());
        };

        AppView.prototype.render = function () {
            var html = AppViewHtml({});

            return html;
        };
        return AppView;
    })();

    
    return AppView;
});
//# sourceMappingURL=AppView.js.map
