window.onload = function () {
  let game;
  let currentGameMode = "adults";
  let playerName = "";
  let soundEnabled = true;
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const kidsButton = document.getElementById("kids-button");
  const adultsButton = document.getElementById("adults-button");
  const modeSelection = document.getElementById("mode-selection");
  const gameRules = document.getElementById("game-rules");
  const introLogo = document.getElementById("intro-logo");
  const playerNameInput = document.getElementById("player-name");
  const soundToggle = document.getElementById("sound-toggle");
  const gameTitle = document.querySelector(".game-title");
  const highScoresListIntro = document.getElementById("high-scores-list-intro");
  const masterSoundButton = document.getElementById("master-sound");

  // Master sound button functionality
  const backgroundMusic = new Audio("/assets/audio/4am.mp3");
  // backgroundMusic.play();
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.5;
  masterSoundButton.addEventListener("click", () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  });

  // Load and display high scores on game intro screen
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  const topThreeScores = highScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  highScoresListIntro.innerHTML = "";

  if (topThreeScores.length === 0) {
    const li = document.createElement("li");
    li.innerText = "No scores yet!";
    li.style.listStyle = "none";
    highScoresListIntro.appendChild(li);
  } else {
    topThreeScores.forEach((record) => {
      const li = document.createElement("li");
      li.innerText = `${record.name}: ${record.score}`;
      highScoresListIntro.appendChild(li);
    });
  }

  // Mode selection event listeners
  kidsButton.addEventListener("click", function () {
    currentGameMode = "kids";
    introLogo.src = "/assets/images/tchoupi.png";
    document.title = "Tchoupi : Slalom Edition";
    gameTitle.innerHTML =
      'TCHOUPI SLALOM<span class="title-subtitle">KIDS EDITION</span>';
    modeSelection.style.display = "none";
    gameRules.style.display = "flex";
    playerNameInput.focus();
  });

  adultsButton.addEventListener("click", () => {
    currentGameMode = "adults";
    introLogo.src = "/assets/images/joker-cartoon.jpg";
    document.title = "Joker : Slalom Edition";
    document.querySelector(".game-title").innerHTML =
      'JOKER SLALOM<span class="title-subtitle">ARMED EDITION</span>';
    modeSelection.style.display = "none";
    gameRules.style.display = "flex";
    playerNameInput.focus();
  });

  startButton.addEventListener("click", () => {
    // Get player name from input
    playerName = playerNameInput.value.trim();

    // Check if name is entered
    if (playerName === "") {
      alert("Please enter your name!");
      return;
    }

    startGame();
  });

  // Allow Enter key to start game
  playerNameInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      startButton.click();
    }
  });

  // Sound toggle button
  soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      soundToggle.innerText = "🔊 Sound ON";
      game.boom.volume = 0.1;
      game.fire.volume = 0.1;
      game.collision.volume = 0.1;
    } else {
      soundToggle.innerText = "🔇 Sound OFF";
      game.boom.volume = 0;
      game.fire.volume = 0;
      game.collision.volume = 0;
    }
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  window.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      game.player.directionX = -2;
    }
    if (event.code === "ArrowRight") {
      game.player.directionX = 2;
    }
    if (event.code === "ArrowUp") {
      game.player.directionY = -2;
    }
    if (event.code === "ArrowDown") {
      game.player.directionY = 2;
    }
    if (event.code === "Space") {
      game.projectiles.push(
        new Projectile(
          game.gameScreen,
          //the left of the player plus half the player width minus half the projectile width
          game.player.left + 65 - 10,
          game.player.top
        )
      );
      //calling the fire sound from the game class
      game.fire.play();
    }
  });
  window.addEventListener("keyup", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      game.player.directionX = 0;
    }
    if (event.code === "ArrowRight") {
      game.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      game.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      game.player.directionY = 0;
    }
  });
  function startGame() {
    console.log(
      "start game with mode:",
      currentGameMode,
      "and player:",
      playerName
    );
    game = new Game(currentGameMode, playerName);
    game.start();
  }
};
