class Game {
  // code to be added
  constructor(gameMode, playerName) {
    this.gameMode = gameMode;
    this.playerName = playerName;
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameStats = document.getElementById("game-stats");
    this.endScreen = document.getElementById("game-end");
    this.endScreenImage = document.getElementById("game-end-img");
    this.highScoreContainer = document.getElementById("high-scores-ol");
    this.player = new Player(
      this.gameScreen,
      275,
      400,
      130,
      240,
      this.gameMode
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen, this.gameMode)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.floor(1000 / 60); // 60 frames per second
    // adding projectile feature
    this.projectiles = [];
    // adding power-up feature
    this.powerUps = [];
    // the score element from the HTML
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    // counter to keep track of the frames
    this.frames = 0;

    // adding sounds
    this.boom = new Audio("assets/audio/boom.wav");
    this.boom.volume = 0.1;

    this.fire = new Audio("assets/audio/fire.wav");
    this.fire.volume = 0.1;

    this.collision = new Audio("assets/audio/spin.wav");
    this.collision.volume = 0.1;

    this.powerUpSound = new Audio("assets/audio/1up.wav");
    this.powerUpSound.volume = 0.1;
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameStats.style.display = "flex"; // show the stats during the game
    // Set background based on mode
    if (this.gameMode === "kids") {
      this.gameScreen.style.backgroundImage =
        'url("assets/images/dark-notebook.png")';
    } else {
      this.gameScreen.style.backgroundImage = 'url("assets/images/milky.jpg")';
    }
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency); // the gameLoop is updated 60 times per second
  }
  gameLoop() {
    // this.frames++
    // console.log(this.frames)
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    // console.log("This is in the update method.");
    this.player.move();
    // loop for obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // If the player collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Play collision sound
        this.collision.play();
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
        // Reduce player's lives by 1
        this.lives--;
        this.livesElement.innerText = this.lives;

        // adding spinning through CSS class
        this.player.element.classList.add("spin");

        // remove the spin class after the spinning animation
        setTimeout(() => {
          this.player.element.classList.remove("spin");
        }, 500);
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
        // Increase the score by 1
        this.score++;
        this.scoreElement.innerText = this.score;
      }

      // Check for collisions with projectiles
      for (let j = 0; j < this.projectiles.length; j++) {
        const currentProjectile = this.projectiles[j];
        currentProjectile.move();

        if (currentProjectile.didHit(obstacle)) {
          // Play boom sound
          this.boom.currentTime = 0; // Reset to start
          this.boom.play();
          //remove the img from the DOM
          obstacle.element.remove();
          //remove the obstacle from the array
          this.obstacles.splice(i, 1);
          i--;
          //remove the projectile
          currentProjectile.element.remove();
          //remove the projectile from the array
          this.projectiles.splice(j, 1);
          j--;
          //add one point to the score
          this.score++;
          this.scoreElement.innerText = this.score;
        } else if (currentProjectile.top < 0) {
          // Remove projectile if it goes off-screen (top)
          currentProjectile.element.remove();
          this.projectiles.splice(j, 1);
          j--;
        }
      }
    }
    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    // Power-ups logic
    for (let i = 0; i < this.powerUps.length; i++) {
      const powerUp = this.powerUps[i];
      powerUp.move();

      // If the player collects the power-up
      if (this.player.didCollide(powerUp)) {
        // Play power-up sound
        this.powerUpSound.play();
        // Remove the power-up element from the DOM
        powerUp.element.remove();
        // Remove power-up object from the array
        this.powerUps.splice(i, 1);
        i--;
        // Add 1 life
        this.lives++;
        this.livesElement.innerText = this.lives;

        // Visual feedback added - pulse the lives counter
        this.livesElement.classList.add("pulse");
        setTimeout(() => {
          this.livesElement.classList.remove("pulse");
        }, 500);
      }
      // If the power-up is off the screen (at the bottom)
      else if (powerUp.top > this.height) {
        // Remove the power-up from the DOM
        powerUp.element.remove();
        // Remove power-up object from the array
        this.powerUps.splice(i, 1);
        i--;
      }
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen, this.gameMode));
    }

    // Create a new power-up based on a random probability (rare)
    if (Math.random() > 0.995 && this.powerUps.length < 1) {
      this.powerUps.push(new PowerUp(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;

    // Set the end screen image based on game mode
    if (this.gameMode === "kids") {
      this.endScreenImage.src = "assets/images/ouioui.png";
    } else {
      this.endScreenImage.src = "assets/images/mask-hammer.jpg";
    }

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.endScreen.style.display = "block";
  }

  // Game over screen and displaying high scores
  gameOver() {
    console.log("Game is Over Man");
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "flex";
    this.gameStats.style.display = "none";

    // Display high scores and store them in local storage
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Add current score with player name as an object
    highScores.push({
      name: this.playerName,
      score: this.score,
    });

    // Sort in descending order by score
    highScores.sort((a, b) => b.score - a.score);

    // Keep only top 3 scores
    const topThreeScores = highScores.slice(0, 3);

    // Save the full array to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Display the top 3 scores with names
    topThreeScores.forEach((record) => {
      const li = document.createElement("li");
      li.innerText = `${record.name}: ${record.score}`;
      this.highScoreContainer.appendChild(li);
    });
  }
}
