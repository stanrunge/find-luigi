import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("game");
  }

  create() {
    this.add.text(100, 100, "woweee");
  }
}
