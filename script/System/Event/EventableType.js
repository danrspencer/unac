define(["require", "exports", 'System/Event/TypedEvent'], function(require, exports, __TypedEvent__) {
    var TypedEvent = __TypedEvent__;
    

    var EventableType = (function () {
        function EventableType(owner, args) {
            this.assigned = new TypedEvent();
        }
        EventableType.prototype.get = function () {
            return this._value;
        };

        EventableType.prototype.set = function (value) {
            this._value = value;

            this.assigned.trigger(this._owner, value);
        };
        return EventableType;
    })();

    
    return EventableType;
});
//# sourceMappingURL=EventableType.js.map
