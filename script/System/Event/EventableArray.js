define(["require", "exports", 'System/Event/TypedEvent'], function(require, exports, __TypedEvent__) {
    var TypedEvent = __TypedEvent__;
    
    
    

    var EventableArray = (function () {
        function EventableArray() {
        }
        EventableArray.prototype.set = function (array) {
            this._array = array;

            this.arrayReset.trigger(this._array);
        };

        EventableArray.prototype.getItem = function (index) {
            return this._array[index];
        };

        EventableArray.prototype.setItem = function (index, value) {
            this._array[index] = value;

            this.itemAssigned.trigger(value, index);
        };

        EventableArray.prototype.toString = function () {
            return this._array.toString.apply(this, arguments);
        };

        EventableArray.prototype.toLocaleString = function () {
            return this._array.toLocaleString.apply(this, arguments);
        };

        EventableArray.prototype.concat = function () {
            var items = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                items[_i] = arguments[_i + 0];
            }
            return this._array.concat.apply(this, arguments);
        };

        EventableArray.prototype.join = function (separator) {
            return this._array.join.apply(this, arguments);
        };

        EventableArray.prototype.pop = function () {
            var item = this._array.pop.apply(this, arguments);
            var removedIndex = this._array.length;

            this.length = this._array.length;
            this.itemRemoved.trigger(item, removedIndex);

            return item;
        };

        EventableArray.prototype.push = function () {
            var items = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                items[_i] = arguments[_i + 0];
            }
            var result = this._array.push.apply(this, arguments);

            this.length = this._array.length;
            this.itemsAdded.trigger(this._array, items);

            return result;
        };

        EventableArray.prototype.reverse = function () {
            var result = this._array.reverse.apply(this, arguments);

            this.arraySorted.trigger(this._array);

            return result;
        };

        EventableArray.prototype.shift = function () {
            var item = this._array.shift.apply(this, arguments);

            this.length = this._array.length;
            this.itemRemoved.trigger(item, 0);

            return item;
        };

        EventableArray.prototype.slice = function (start, end) {
            return this._array.slice.apply(this, arguments);
        };

        EventableArray.prototype.sort = function (compareFn) {
            return this._array.sort.apply(this, arguments);
        };

        EventableArray.prototype.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 0; _i < (arguments.length - 2); _i++) {
                items[_i] = arguments[_i + 2];
            }
            return this._array.splice.apply(this, arguments);
        };

        EventableArray.prototype.unshift = function () {
            var items = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                items[_i] = arguments[_i + 0];
            }
            return this._array.unshift.apply(this, arguments);
        };

        EventableArray.prototype.indexOf = function (searchElement, fromIndex) {
            return this._array.indexOf.apply(this, arguments);
        };

        EventableArray.prototype.lastIndexOf = function (searchElement, fromIndex) {
            return this._array.lastIndexOf.apply(this, arguments);
        };

        EventableArray.prototype.every = function (callbackfn, thisArg) {
            return this._array.every.apply(this, arguments);
        };

        EventableArray.prototype.some = function (callbackfn, thisArg) {
            return this._array.some.apply(this, arguments);
        };

        EventableArray.prototype.forEach = function (callbackfn, thisArg) {
        };

        EventableArray.prototype.map = function (callbackfn, thisArg) {
            return this._array.map.apply(this, arguments);
        };

        EventableArray.prototype.filter = function (callbackfn, thisArg) {
            return this._array.filter.apply(this, arguments);
        };

        EventableArray.prototype.reduce = function (callbackfn, initialValue) {
            return this._array.reduce.apply(this, arguments);
        };

        EventableArray.prototype.reduceRight = function (callbackfn, initialValue) {
            return this._array.reduceRight.apply(this, arguments);
        };
        return EventableArray;
    })();
    exports.EventableArray = EventableArray;
});
//# sourceMappingURL=EventableArray.js.map
