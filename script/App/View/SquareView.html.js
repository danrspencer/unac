define(["require", "exports"], function(require, exports) {
    function getHtml() {
        return '<td data-square="<%= squares[3].id %>" class="square <%= squares[3].class %>">    <%= squares[3].content %></td>';
    }
    exports.getHtml = getHtml;
});
//# sourceMappingURL=SquareView.html.js.map
