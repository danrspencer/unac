define(["require", "exports"], function(require, exports) {
    function getHtml() {
        return '<table class="grid">    <tr>        <%= squares[0].render() %>        <%= squares[1].render() %>        <%= squares[2].render() %>    </tr>    <tr>        <%= squares[4].render() %>        <%= squares[5].render() %>        <%= squares[6].render() %>    </tr>    <tr>        <%= squares[7].render() %>        <%= squares[8].render() %>        <%= squares[9].render() %>    </tr></table>';
    }
    exports.getHtml = getHtml;
});
//# sourceMappingURL=GridView.html.js.map
