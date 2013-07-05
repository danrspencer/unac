var TypedEvent = (function () {
    function TypedEvent() {
        this._listeners = [];
    }
    TypedEvent.prototype.add = function (listener) {
        this._listeners.push(listener);
    };
    TypedEvent.prototype.remove = function (listener) {
        if (typeof listener == 'function') {
            for (var i = 0, l = this._listeners.length; i < l; l++) {
                if (this._listeners[i] == listener) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        } else {
            this._listeners = [];
        }
    };

    TypedEvent.prototype.trigger = function () {
        var a = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            a[_i] = arguments[_i + 0];
        }
        var context = {};
        var listeners = this._listeners.slice(0);
        for (var i = 0, l = listeners.length; i < l; i++) {
            listeners[i].apply(context, a || []);
        }
    };
    return TypedEvent;
})();
//@ sourceMappingURL=TypedEvent.js.map
