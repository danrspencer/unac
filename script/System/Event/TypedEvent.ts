
import IEvent = require('System/Event/IEvent');

class TypedEvent implements IEvent {

  private _listeners: { callback: () => void; context: Object }[];

  constructor() {
    this._listeners = [];
  }

  public add(listener: () => void, context: Object): void {
    this._listeners.push(
      {
        callback: listener,
        context: context
      }
    );
  }

  public remove (listener?: () => void): void {
    for (var i = 0, l = this._listeners.length; i < l; l++) {
      if (this._listeners[i].callback == listener) {
        this._listeners.splice(i, 1);
        break;
      }
    }
  }

  public removeAll(): void {
    this._listeners = [];
  }

  public trigger(sender: Object, ...args: any[]): void {
    var listeners = this._listeners.slice(0);

    for(var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].callback.apply(listeners[i].context, args || []);
    }
  }
}

export = TypedEvent;

