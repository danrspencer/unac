/// <reference path="IEvent.ts" />

interface IMoveMadeEvent extends IEvent {
  add(listener: (id: string, winner: number, nextGridId: string) => void): void;
  remove(listener: (id: string, winner: number, nextGridId: string) => void ): void;
  trigger(id: string, winner: number, nextGridId: string): void;
}
