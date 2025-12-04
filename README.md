# SLALOM Game | inspired by IronHack's Race Car Lab

<img src="/assets/images/tchoupi.png" width="150px" alt="tchoupi-logo">
<img src="/assets/images/joker-cartoon.jpg" width="150px" alt="joker-logo">

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

## Introduction
In this exercise, we will create a **Slalom : Armed Edition** game using DOM manipulation, classes, and object-oriented programming (OOP).

### Getting Started


#### Game-Intro
- First choose your character depending on your age / mood / personal preferences
- You should see below the characters a recap of the top three scores recorded on the browser Local Storage
- Try hover them, some effects were added
- You will see controls button on the top during all your experience, they let you :
  - play a music, credit goes to [Stereoclip ©](https://open.spotify.com/intl-fr/album/6A9MVcSN5s7142HgCZUQKS)
  - Enable / Disable sounds during the game
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
- Press <kbd>SPACE</kbd> to fire projectiles
>[!NOTE]
> You'll notice that Tchoupi throws bananas 🍌 whereas Joker got real ammos 🔫
#### Objectives
- Avoid collisions with enemies
- Make the highest score
#### Game behavior
- You start with 3 lives, score to 0 and unlimited ammo
- Avoid colliding with enemies, you'll lose 1 live and hear me crying (Wassup)[/assets/audio/spin.wav]
- You can 

## Game Over
- You lost all your lives, GAME OVER !
- ('Wassup')[https://www.youtube.com/watch?v=W16qzZ7J5YQ] audio auto plays when game is over
- 
- Name and score are recorded on 
In this final iteration, we will implement the end game screen, shown to the user when the game is over.

## Additional features we could go through
- Responsive design
- Handling number of projectiles munitions
- Better design
- Animations and hover effects
- 