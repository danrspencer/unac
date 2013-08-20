import EventableType = require('System/Event/EventableType');
import WinnerType = require('App/Enum/WinnerType');

interface ISquare {

  winner: EventableType<WinnerType>;

  getStateString(): string;

}

export = ISquare;