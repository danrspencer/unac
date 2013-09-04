
import TypedEvent = require('System/Event/TypedEvent');
import IArrayEvent = require('System/Event/IArrayEvent');
import IArrayItemEvent = require('System/Event/IArrayItemEvent');
import IArrayItemsEvent = require('System/Event/IArrayItemsEvent');

class EventableArray<T> implements Array<T> {

  public length: number;

  private _array: T[];

  public itemRemoved: IArrayItemEvent<T>;

  public itemAssigned: IArrayItemEvent<T>;

  public itemsAdded: IArrayItemsEvent<T>;

  public arraySorted: IArrayEvent<T>;

  public arrayReset: IArrayEvent<T>;

  constructor() {
    this._array = [];
  }

  public set(array: T[]) {
    this._array = array;

    this.arrayReset.trigger(this._array);
  }

  public getItem(index: number) {
    return this._array[index];
  }

  public setItem(index: number, value: T) {
    this._array[index] = value;

    this.itemAssigned.trigger(value, index);
  }

  public toString(): string {
    return this._array.toString.apply(this, arguments);
  }

  public toLocaleString(): string {
    return this._array.toLocaleString.apply(this, arguments);
  }

  public concat(...items: T[]): T[] {
    return this._array.concat.apply(this, arguments);
  }

  public join(separator?: string): string {
    return this._array.join.apply(this, arguments);
  }

  public pop(): T {

    var item = this._array.pop.apply(this, arguments);
    var removedIndex = this._array.length;

    this.length = this._array.length;
    this.itemRemoved.trigger(item, removedIndex);

    return item;
  }

  public push(...items: T[]): number {

    var result = this._array.push.apply(this, arguments);

    this.length = this._array.length;
    this.itemsAdded.trigger(this._array, items);

    return result;
  }

  public reverse(): T[] {

    var result = this._array.reverse.apply(this, arguments);

    this.arraySorted.trigger(this._array);

    return result;
  }

  public shift(): T {

    var item = this._array.shift.apply(this, arguments);

    this.length = this._array.length;
    this.itemRemoved.trigger(item, 0);

    return item;
  }

  public slice(start: number, end?: number): T[] {

    return this._array.slice.apply(this, arguments);
  }

  public sort(compareFn?: (a: T, b: T) => number): T[] {

    return this._array.sort.apply(this, arguments);
  }

  public splice(start: number, deleteCount?: number, ...items: T[]): T[] {

    return this._array.splice.apply(this, arguments);
  }

  public unshift(...items: T[]): number {

    return this._array.unshift.apply(this, arguments);
  }

  public indexOf(searchElement: T, fromIndex?: number): number {

    return this._array.indexOf.apply(this, arguments);
  }

  public lastIndexOf(searchElement: T, fromIndex?: number): number {
    return this._array.lastIndexOf.apply(this, arguments);
  }

  public every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
    return this._array.every.apply(this, arguments);
  }

  public some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
    return this._array.some.apply(this, arguments);
  }

  public forEach(callbackfn: (value: T, index: number, array: T[]) => void , thisArg?: any): void {

  }

  public map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    return this._array.map.apply(this, arguments);
  }

  public filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[] {
    return this._array.filter.apply(this, arguments);
  }

  public reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T {
    return this._array.reduce.apply(this, arguments);
  }

  public reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T {
    return this._array.reduceRight.apply(this, arguments);
  }
}

export = EventableArray;