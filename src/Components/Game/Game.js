import Phaser from 'phaser'
// import GameScene from './gameScene.js'
import React, { Component } from 'react';
import testImage from '../../Components/testImage.png'

function Game() {
    const config = {
        type: Phaser.WEBGL,
        width: 640,
        height: 480,
        backgroundColor: "black",
        parent: 'phaser-example',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    const game = new Phaser.Game(config);

    function preload() {
        this.load.image('testImage', testImage)
    }

    function create() {
        this.add.image(100, 100, "testImage").setScale(0.03);
    }

    function update() {
    }



    return (
        <div className="Game">
            Game
        </div>
    );
}

export default Game;