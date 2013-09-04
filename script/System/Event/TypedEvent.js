define(["require", "exports"], function(require, exports) {
    

    var TypedEvent = (function () {
        function TypedEvent() {
            this._listeners = [];
        }
        TypedEvent.prototype.add = function (listener, context) {
            this._listeners.push({
                callback: listener,
                context: context
            });
        };

        TypedEvent.prototype.remove = function (listener) {
            for (var i = 0, l = this._listeners.length; i < l; l++) {
                if (this._listeners[i].callback == listener) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };

        TypedEvent.prototype.count = function () {
            return this._listeners.length;
        };

        TypedEvent.prototype.removeAll = function () {
            this._listeners = [];
        };

        TypedEvent.prototype.trigger = function (sender) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var listeners = this._listeners.slice(0);

            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].callback.apply(listeners[i].context, args || []);
            }
        };
        return TypedEvent;
    })();

    
    return TypedEvent;
});
//# sourceMappingURL=TypedEvent.js.map
