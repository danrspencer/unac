/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/jquery.d.ts" />
define(["require", "exports", 'App/View/GridView.html'], function(require, exports, __GridViewHtml__) {
    
    

    var GridViewHtml = __GridViewHtml__;

    var GridView = (function () {
        function GridView(squares) {
        }
        GridView.prototype.render = function () {
            var html = GridViewHtml({});

            return html;
        };
        return GridView;
    })();

    
    return GridView;
});
//# sourceMappingURL=GridView.js.map
