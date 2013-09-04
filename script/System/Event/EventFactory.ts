
import EventableArray = require('System/Event/EventableArray');
import EventableType = require('System/Event/EventableType');

class EventFactory {

  private static _instance: EventFactory;

  private constructor() {

  }

  public static getInstance(): EventFactory {
    if (EventFactory._instance === null) {
      EventFactory._instance = new EventFactory();
    }

    return EventFactory._instance;
  }

  public getEventableArray<T>() {

    return new EventableArray<T>();
  }

  public getEventableType<T>(owner: Object, args?: { get?: () => T; set?: (T) => void }) {
    return new EventableType<T>(owner, args);
  }
}

export = EventFactory;