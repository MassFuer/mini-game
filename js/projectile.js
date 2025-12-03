class Projectile {
  constructor(gameScreen, posX, posY, gameMode = "adults") {
    this.gameScreen = gameScreen;
    this.left = posX;
    this.top = posY;
    this.width = 25;
    this.height = 40;
    this.gameMode = gameMode;
    this.element = document.createElement("img");
    if (this.gameMode === "kids") {
      this.element.src = "assets/images/banana.png";
    } else {
      this.element.src = "assets/images/projectile.png";
    }
    this.element.style.position = "absolute";
    //these set the size of our car
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    // these set the position of the car when game starts
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //this visually adds the car to the page
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top -= 8;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
  didHit(obstacle) {
    const projectileRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      projectileRect.left < obstacleRect.right &&
      projectileRect.right > obstacleRect.left &&
      projectileRect.top < obstacleRect.bottom &&
      projectileRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
