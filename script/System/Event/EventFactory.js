define(["require", "exports", 'System/Event/EventableArray', 'System/Event/EventableType'], function(require, exports, __EventableArray__, __EventableType__) {
    var EventableArray = __EventableArray__;
    var EventableType = __EventableType__;

    var EventFactory = (function () {
        function EventFactory() {
        }
        EventFactory.prototype.constructor = function () {
        };

        EventFactory.getInstance = function () {
            if (EventFactory._instance === null) {
                EventFactory._instance = new EventFactory();
            }

            return EventFactory._instance;
        };

        EventFactory.prototype.getEventableArray = function () {
            return new EventableArray();
        };

        EventFactory.prototype.getEventableType = function (owner, args) {
            return new EventableType(owner, args);
        };
        return EventFactory;
    })();

    
    return EventFactory;
});
//# sourceMappingURL=EventFactory.js.map
