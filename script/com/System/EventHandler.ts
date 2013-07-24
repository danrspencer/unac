/// <reference path="IEventHandler.ts" />

export class EventHandler<TArgs extends Object> implements IEventHandler<TArgs> {

  private _listeners: any[];

  constructor() {
    this._listeners = [];
  }

  public add(listener: (sender: Object, args: TArgs) => void): void {
    this._listeners.push(listener);
  }

  public remove (listener: (sender: Object, args: TArgs) => void): void {
    for (var i = 0, l = this._listeners.length; i < l; l++) {
      if (this._listeners[i] == listener) {
        this._listeners.splice(i, 1);
        break;
      }
    }
  }

  public removeAll(): void {
    this._listeners = [];
  }

  public trigger(eventArgs: TArgs): void {
    var context = {};
    var listeners = this._listeners.slice(0);

    for(var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(context, eventArgs);
    }
  }
}
