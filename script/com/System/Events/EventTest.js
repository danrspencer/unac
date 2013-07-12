define(["require", "exports"], function(require, exports) {
    var EventTest = (function () {
        function EventTest() {
            this._listeners = [];
        }
        EventTest.prototype.add = function (listener) {
            this._listeners.push(listener);
        };

        EventTest.prototype.remove = function (listener) {
            for (var i = 0, l = this._listeners.length; i < l; l++) {
                if (this._listeners[i] == listener) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };

        EventTest.prototype.removeAll = function () {
            this._listeners = [];
        };

        EventTest.prototype.trigger = function (eventArgs) {
            var context = {};
            var listeners = this._listeners.slice(0);

            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(context, eventArgs);
            }
        };
        return EventTest;
    })();
    exports.EventTest = EventTest;
});
//@ sourceMappingURL=EventTest.js.map
