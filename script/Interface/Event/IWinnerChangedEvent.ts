
import IEvent = require('System/Event/IEvent');
import WinnerType = require('App/Enum/WinnerType');

interface IWinnerChangedEvent extends IEvent {

  add(listener: (sender: Object, squareId: number, winner: WinnerType) => void, context: Object): void;
  remove(listener: (sender: Object, winner: WinnerType) => void ): void;
  trigger(sender: Object, winner: WinnerType): void;
}

export = IWinnerChangedEvent;