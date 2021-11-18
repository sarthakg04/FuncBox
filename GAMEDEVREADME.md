# Game Dev Guide

## Step 1: Setting up the Game

- Add the Game to the games db through admin panel if not already added
- In the `public` folder add a folder with the naming convention `<game-name>GameFiles`
- Open the `gameFilePath.js` file and in the `filepath` json put the name of the folder that you created in the `public` directory corresponding to the game id that is available in the games page in admin panel
- In the `src/components/Games` folder create a folder for the game and create a `.js` file (Example : `"CalculatorGame/CalculatorGame.js"`)
- Copy this piece of code into the `.js` file  
  Change `<game-id>` with the game id

```
import React from "react";
import GameContainer from "../GameContainer/GameContainer";
export default function AnimalHomeGame() {
  return (
    <div>
      <GameContainer gid={<game-id>} />
    </div>
  );
}


```

- In the `App.js` file:
  - import the component that you created in the `src/components` directory
  - inside the `Router` add a `Route Component` \
    Example: `<Route path="/<game-url>" conponent={<component-name>}/>`
- Now make sure your game can be visited on the route you created(make sure to start the local server)

## Step 2 : Coding the game

- Inside the folder that you created in the `public` directory create these files or folders

  - `script.js`
  - `style.css`
  - `assets` folder

- Start writing your **code** in the the `script.js`
- Write **styles** in `style.css`
- **Images** should be kept in `imagekit.io` in `.png` format
