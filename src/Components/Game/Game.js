import Phaser from 'phaser'
// import GameScene from './gameScene.js'
import React, { Component } from 'react';

function Game() {
    const game = new Phaser.Game({
        // ...configs,
        parent: 'game-content',
    });


    return (
        <div className="Game">
            Game
        </div>
    );
}

export default Game;