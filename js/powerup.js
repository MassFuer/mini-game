class PowerUp {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.possibleLeftPositions = [85, 285];
    this.left =
      this.possibleLeftPositions[
        Math.floor(Math.random() * this.possibleLeftPositions.length)
      ];
    this.top = -150;
    this.width = 65;
    this.height = 120;

    // this is all for the img tag of our player
    this.element = document.createElement("img");
    this.element.style.position = "absolute";

    this.randomPowerUpIndex = Math.floor(Math.random() * 2);
    this.powerUpImages = [
      "assets/images/mush.png",
      "assets/images/heart.png",
    ];
    // Set power-up image
    this.element.src = this.powerUpImages[this.randomPowerUpIndex];

    // setting the style of our car
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    // setting the position of the car when game starts
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    // this visually adds the car to the page
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += 6;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
  didCollide(powerUp) {
    const playerRect = this.element.getBoundingClientRect();
    const powerUpRect = powerUp.element.getBoundingClientRect();

    if (
      playerRect.left < powerUpRect.right &&
      playerRect.right > powerUpRect.left &&
      playerRect.top < powerUpRect.bottom &&
      playerRect.bottom > powerUpRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
