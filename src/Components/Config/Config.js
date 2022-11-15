import Phaser from "phaser";
import React, { Component, useEffect, useState } from "react";
import Game from '../Game'


function Config() {
  const [loaded, setLoaded] = useState(false);
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (loaded) {
      const config = {
        type: Phaser.WEBGL,
        width: 1280,
        height: 720,
        backgroundColor: "black",
        parent: "phaser-example",
        scene: Game,
      };

      setGame(new Phaser.Game(config));
    }

    setLoaded(true);
  }, [loaded]);


  return <>
    <div className="Config">Config </div>
  </>
}

export default Config;
