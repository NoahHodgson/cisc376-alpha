import { GameScene} from "./scenes/GameScene"
import { LoadScene } from "./scenes/LoadScene"
import { MenuScene } from "./scenes/MenuScene"
import { GameUIScene } from "./scenes/GameUIScene"

class Game extends Phaser.Game {
  private static instance: Game;

  private constructor() {
    const config = {
      height: 640,
      parent: "content",
      physics: {
        arcade: {
          // debug: true,
          gravity: { y: 0 },
        },
        default: "arcade",
      },
      pixelArt: false,
      scene: [LoadScene, MenuScene, GameScene, GameUIScene],
      type: 0,
      width: 500,
      zoom: 1,
    };

    super(config);
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }
}

export default Game.Instance;
