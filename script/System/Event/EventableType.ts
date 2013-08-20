
import TypedEvent = require('System/Event/TypedEvent');
import IBaseEvent = require('System/Event/IBaseEvent');

class EventableType<T> {

  private _value: T;
  private _owner: Object;

  public assigned: IBaseEvent<T>;

  constructor(owner: Object, args?: { get?: () => T; set?: (T) => void }) {
    this.assigned = new TypedEvent();
  }

  public get(): T {
    return this._value;
  }

  public set(value: T) {
    this._value = value;

    this.assigned.trigger(this._owner, value);
  }
}

export = EventableType;