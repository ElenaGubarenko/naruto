import Phaser from 'phaser'
// import GameScene from './gameScene.js'
import React, { Component } from 'react';
import testImage from '../../Components/testImage.png'

function Game() {
    const game = new Phaser.Game({
        // ...configs,
        parent: 'game-content',
        height: 576,
        width: 1024,
        type: Phaser.AUTO,
        scene: {
            init: function () { },
            preload: function () {
                this.load.image('testImage', testImage)
                this.add.image(0, 0, "testImage")
            }
        }
    })


    return (
        <div className="Game">
            Game

        </div>
    );
}

export default Game;