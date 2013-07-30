define(["require", "exports"], function(require, exports) {
    var EventHandler = (function () {
        function EventHandler() {
            this._listeners = [];
        }
        EventHandler.prototype.add = function (listener) {
            this._listeners.push(listener);
        };

        EventHandler.prototype.remove = function (listener) {
            for (var i = 0, l = this._listeners.length; i < l; l++) {
                if (this._listeners[i] == listener) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };

        EventHandler.prototype.removeAll = function () {
            this._listeners = [];
        };

        EventHandler.prototype.trigger = function (eventArgs) {
            var context = {};
            var listeners = this._listeners.slice(0);

            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(context, eventArgs);
            }
        };
        return EventHandler;
    })();

    
    return EventHandler;
});
//@ sourceMappingURL=EventHandler.js.map
