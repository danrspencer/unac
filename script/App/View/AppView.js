/// <reference path="../../Vendor/jquery.d.ts" />
/// <reference path="../../Vendor/underscore.d.ts" />
/// <reference path="../../Vendor/underscore-typed.d.ts" />
define(["require", "exports", 'App/View/GridView', 'App/View/AppView.html'], function(require, exports, __GridView__, __AppViewHtml__) {
    
    var GridView = __GridView__;

    var AppViewHtml = __AppViewHtml__;

    var AppView = (function () {
        function AppView() {
        }
        AppView.prototype.render = function () {
            AppViewHtml.getHtml();

            return this;
        };
        return AppView;
    })();

    
    return AppView;
});
//# sourceMappingURL=AppView.js.map
