import { BaseGameScene } from "./BaseGameScene";
import GameData from "../GameData";
import { GameScene } from "./GameScene";

export class MenuScene extends BaseGameScene {

  private textStyle = { color: this.textColor, align: "center", fontSize: "24px" };
  private showPoints = false;

  constructor() {
    super({ key: MenuScene.name });
  }

  public init(data: any) {
    this.showPoints = data.showPoints;
  }

  public create() {
    super.create();

    const titleLabel = this.add.text(0, 30, "Vitamin-Tetris", this.textStyle);
    titleLabel.x = (this.width - titleLabel.width) / 2;

    if (this.showPoints) {
      const gameOverLabel = this.add.text(0, 150, "Game over", this.textStyle);
      gameOverLabel.x = (this.width - gameOverLabel.width) / 2;

      const pointsLabel = this.add.text(0, 200, `You earned ${GameData.gamePoints} points`, this.textStyle);
      pointsLabel.x = (this.width - pointsLabel.width) / 2;
    }

    const playButton = this.add.image(this.width / 2, this.height / 2, "playIcon");
    playButton.setInteractive();
    playButton.on("pointerdown", this.startGame, this);

    this.input.keyboard.on("keydown_SPACE", this.startGame, this);
    this.input.keyboard.on("keydown_ENTER", this.startGame, this);
  }

  private startGame() {
    this.sound.play("click", { volume: 0.1 });
    this.scene.start(GameScene.name);
  }
}
