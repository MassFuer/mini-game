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
  <hr>
</details>

## Requirements from IronHack
### Instructions
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

### Technologies
- Basic HTML, CSS, JS
- JavaScript ( DOM, Basic JS, Classes)
- Win/Lose Logic
- Version control tool (Git/Github)
- Bonus: Local Storage, Audio.

## Introduction to my 🌈 **Slalom Game : Armed Edition** 🌈
### Getting Started
#### Game-Intro
- First, choose your character depending on your age / mood / personal preferences
- If you've already played the game on your browser, you should see below the characters a recap of the top three scores recorded on the browser Local Storage
- Try hover them, some effects were added
- You can access controls buttons on top of the screen during all your experience, they let you :
  - play a music, credit goes to [Stereoclip ©](https://open.spotify.com/intl-fr/album/6A9MVcSN5s7142HgCZUQKS)
  - Enable / Disable sounds effects during the game
  - Enable / Disable dark-mode
- Fonts chosen from [Google Fonts](https://fonts.google.com/) :
  - Press Start 2P
  - Orbitron

## Game-Rules
- HTML and Game-Rules' pages titles are set depending on the character you chose
- Splash image differs from your character's choice
- Then enter your name or surname so that the app could record your score **locally**

>[!NOTE]
>Note that it must be less thant 15 characters long

>[!TIP]
>You can user 'Enter' keyboard to launch the game

>[!CAUTION]
>Don't worry, your data is only stored locally on your browser !

### 🎮 Play the Game 🎮
#### Interacting
- Use arrows ⬅️ ⬆️ ⬇️ ➡️ to move your character along the game-screen
- Press <kbd>SPACE</kbd> or <kbd>CLICK</kbd> to fire projectiles
>[!NOTE]
> You'll notice that Tchoupi throws bananas 🍌 whereas Joker got real ammos 🔫
#### Objective
- Make the highest score and share it with your friends 🤝
#### Game behavior
- You start with score to 0 _(yes, I'm serious)_, 3 lives, and unlimited munitions
- Avoid colliding with enemies, you'll lose 1 live, make a 360° spin and hear me crying [Wassuuuup](/assets/audio/spin.wav)
>[!TIP]
> I can understand if you disable sounds. Just click on the top button !
> <img src="/assets/images/sounds.png" width="50px" alt="sounds-off">
- You should grab some bonuses falling from the sky. 🍄 and ♥️ will let you gain 1 more live (notice the animation in the stats menu) and hear me saying you [Good Job !](/assets/audio/1up.wav)
- Speed Game increased by 1 every 5 score points

## 🤡 Game Over 🤬
- You lost all your lives, GAME OVER !
- A sample of the famous ad ['Wassuuuuup'][https://www.youtube.com/watch?v=W16qzZ7J5YQ] audio auto plays when game is over [Wazzzssaauuuup !](/assets/audio/wassup-2.wav)
- Image displayed depends on the character you chose
- Name and score are recorded locally on the browser
- Top Three scores is displayed as a recap
  - If your score is on the top three (inside the locally stored array), you should be on screen, good job ! 👍

## Additional features we could go through
- Responsive design
- Handling number of projectiles munitions
- Better design
- Animations and hover effects
- 