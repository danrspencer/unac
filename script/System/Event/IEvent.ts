interface IEvent {
  add(listener: (sender: Object) => void, context: Object): void;
  remove(listener: (sender: Object) => void ): void;
  trigger(sender: Object, ...args:any[]): void;
}

export = IEvent;