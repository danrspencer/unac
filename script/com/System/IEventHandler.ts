
interface IEventHandler<TArgs extends Object> {

  add(listener: (sender: Object, args: TArgs) => void): void;
  remove (listener: (sender: Object, args: TArgs) => void): void;
  removeAll(): void;
  trigger(eventArgs: TArgs): void;

}
