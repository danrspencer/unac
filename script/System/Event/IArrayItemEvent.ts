
import IEvent = require('System/Event/IEvent');

interface IArrayItemEvent<T> extends IEvent {

  add(listener: (item: T, index: number) => void, context: Object): void;
  remove(listener: (item: T, index: number) => void ): void;
  trigger(item: T, index: number): void;
}

export = IArrayItemEvent;