# 🕹️ SLALOM Game 🕹️ | inspired by IronHack's Race Car Lab

Tchoupi            |  Joker
:-------------------------:|:-------------------------:
<img src="/assets/images/tchoupi.png" width="150px" alt="tchoupi-logo">  |  <img src="/assets/images/joker-cartoon.jpg" width="150px" alt="joker-logo">

<details>
  <summary>
   <h2>IronHack's Scope</h2>
  </summary>

- Practice and consolidate what we've learnt during these 3 first weeks.
- Practice and consolidate what we've learnt during these 3 first weeks.
- Create a simple 2d game using HTML, CSS, JavaScript, and DOM manipulation.
- Learn by failing
- Bring our personal insight into our projects
- Advance our technical skills in HTML, CSS, JS.
  <br>
  <h3>Instructions</h3>
- Implement simple game logic and UI, including start screen, game screen, and end-game screen.
- Use best practices learnt during lessons
- Single page / Single HTML
- At least 3 stats (splash, game, gameover)
- Use classes and OOP to organize data, functionality, and game elements.
- Use `setInterval()` to create a game loop that continuously updates the game elements.
- Handle user input and events to control game elements.
- Create and display randomly generated obstacles to add complexity to the game.
- Create and manipulate elements in the DOM, including displaying and hiding elements.
- Change the style of the game elements using DOM and CSS
  <br>
  <h3>Technologies</h3>
- Basic HTML, CSS, JS
- JavaScript ( DOM, Basic JS, Classes)
- Win/Lose Logic
- Version control tool (Git/Github)
- Bonus: Local Storage, Audio.
  <hr>

</details>

# 🌈 **Slalom Game : Armed Edition** 🌈

## Credits
- Fonts "Press Start 2P" and "Orbitron" : [Google Fonts](https://fonts.google.com/)
- Audio recorded from mic : [Audacity](https://www.audacityteam.org/)
- Music : [Stereoclip ©](https://open.spotify.com/intl-fr/album/6A9MVcSN5s7142HgCZUQKS)

## Getting Started
### Setup Instructions
- <kbd>Git clone</kbd> the repo from url : https://github.com/MassFuer/mini-game.git
- Open "index.html" in your favorite browser or with LiveServer on VSCode.
### General Controls
- You can access controls buttons on top of the screen during all your game experience, they let you :
  - Play / Stop a music
  - Enable / Disable sounds effects during the game
  - Enable / Disable dark-mode
### Game-Intro
- First, choose your character depending on your age / mood / personal preferences
- If you've already played the game on your browser, you should see below the characters a recap of the top three scores recorded on the browser Local Storage
  - Try hover them, some effects were added

### Game-Rules
- HTML and Game-Rules' pages titles are set depending on the character you chose
- Splash image differs from your character's choice
- Enter your name or pseudo so that the app could record your score **locally**

>[!NOTE]
>Note that it must be less thant 15 characters long

>[!TIP]
>You can use 'Enter' keyboard to launch the game

>[!CAUTION]
>Don't worry, your data is only stored locally on your browser !

## 🎮 Play the Game 🎮
### Interacting
- Use arrows ⬅️ ⬆️ ⬇️ ➡️ to move your character along the game-screen
- Press <kbd>SPACE</kbd> or <kbd>CLICK</kbd> to fire projectiles
>[!NOTE]
> You'll notice that Tchoupi throws bananas 🍌 whereas Joker got real ammos 🔫
> 
### Objective
- Make the highest score and share it with your friends 🤝
### Game behavior
- You start with score to 0 _(yes, I'm serious)_, 3 lives, and unlimited munitions
- Avoid colliding with enemies, you'll lose 1 live, make a 360° spin and hear me crying [Wassuuuup](/assets/audio/spin.wav).
- You got two options to avoid them :
  - fire a projectile and hear me again simulating a sonic rocket [Piou](/assets/audio/fire.wav) 😆. If it's collide with the enemy, you'll score 1 point, hear a (_satisfying_) [Boom shaka](/assets/audio/boom.wav), enemy will disappear on screen and you can keep going on targeting high score leaderboard
  - move around enemy with the directions keys
>[!TIP]
> I understand if you disable sounds. Just click on the top button dedicated for that !
> <img src="/assets/images/sounds.png" width="100px" alt="sounds-off">
- You could also grab some bonuses falling from the sky. 🍄 and ♥️ will let you gain 1 more live (notice the animation in the stats menu) and hear me saying you [Good Job !](/assets/audio/1up.wav)

>[!CAUTION]
Speed Game increased by 1 every 5 score points

### 🤡 Game Over 🤬
- You lost all your lives, GAME OVER !
- A sample of the famous ad ['Wassuuuuup'](https://www.youtube.com/watch?v=W16qzZ7J5YQ) audio auto plays when game ends.
- Image displayed in the Game End screen depends on the character you chose
- Name and score are recorded locally on the browser
- Top Three scores are displayed as a recap
  - If your score is on the top three (inside the locally stored array), you should be on screen, good job ! 👍

## Additional features we could go through
- Responsive design
- Handling number of projectiles munitions
- Improve design
- Animations when enemy shooted, highscore reached, combo executed (get 1 life when 3 points scored in a row, change background over time, etc), etc.
- Feature to pause the game