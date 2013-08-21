define(["require", "exports"], function(require, exports) {
    /// <reference path="../../Vendor/jquery.d.ts" />
    /// <reference path="../../Vendor/underscore.d.ts" />
    /// <reference path="../../Vendor/underscore-typed.d.ts" />
    var html = '<td data-square="<%= squares[3].id %>" class="square <%= squares[3].class %>"> \
              <%= squares[3].content %> \
            </td>';

    var template = _.template(html);

    
    return template;
});
//# sourceMappingURL=SquareView.html.js.map
