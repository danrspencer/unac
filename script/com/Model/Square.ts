/// <reference path="ISquare.ts" />

/// <reference path="Helper/EventHandler.ts" />

class Square implements  ISquare {

  public id: string;

  public winner: number;

  public onWinnerChanged: EventHandler;

  constructor(id: string) {
    this.id = id;

    this.onWinnerChanged = new EventHandler();
  }

}