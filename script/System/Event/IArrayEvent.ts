
import IEvent = require('System/Event/IEvent');

interface IArrayEvent<T> extends IEvent {

  add(listener: (array: T[]) => void, context: Object): void;
  remove(listener: (array: T[]) => void ): void;
  trigger(array: T[]): void;
}

export = IArrayEvent;