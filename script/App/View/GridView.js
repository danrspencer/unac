/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/jquery.d.ts" />
define(["require", "exports", 'App/View/GridView.html', 'App/View/SquareView.html'], function(require, exports, __GridViewHtml__, __SquareViewHtml__) {
    
    

    var GridViewHtml = __GridViewHtml__;
    var SquareViewHtml = __SquareViewHtml__;

    var GridView = (function () {
        function GridView() {
        }
        GridView.prototype.constructor = function (squares) {
        };

        GridView.prototype.render = function () {
            var html = GridViewHtml({});

            return html;
        };
        return GridView;
    })();

    
    return GridView;
});
//# sourceMappingURL=GridView.js.map
