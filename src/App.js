// import PhaserComponent from "./Components/PhaserComponent"
// import GameScene from './Components/GameScene'
// import Game from "./Components/Game";
import Config from "./Components/Config";
import React, { useState, useEffect } from "react";

function App() {
  // const [loaded, setLoaded] = useState(false)
  // console.log(loaded);
  useEffect(() => {
    console.log("!!!!!!!!")
    // setLoaded(true)
  }, []);

  return (
    <div>
      <div className="App">
        Hello
      </div>
      <Config></Config>
      {/* <Game></Game> */}
    </div>

  );
}

export default App;
