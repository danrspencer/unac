
import IEvent = require('System/Event/IEvent');

interface IBaseEvent<T> extends IEvent {

  add(listener: (sender: Object, value: T) => void, context: Object): void;
  remove(listener: (sender: Object, value: T) => void ): void;
  trigger(sender: Object, value: T): void;

}

export = IBaseEvent;