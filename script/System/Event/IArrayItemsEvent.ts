
import IEvent = require('System/Event/IEvent');

interface IArrayItemEvent<T> extends IEvent {

  add(listener: (array: T[], items: T[]) => void, context: Object): void;
  remove(listener: (array: T[], items: T[]) => void ): void;
  trigger(array: T[], items: T[]): void;
}

export = IArrayItemEvent;