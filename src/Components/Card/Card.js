import React, { Component } from "react";
import Phaser from "phaser";

class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, card, position, texture) {
    super(scene, position.x, position.y, texture);
    this.scene = scene;
    this.setOrigin(0, 0);
    this.scene.add.existing(this);
    this.card = card;
    this.id = card.id;

    this.setInteractive();
  }

  openCard() {
    this.setTexture(this.card.texture);
  }

  closeCard() {
    // this.setTexture(this.texture)
  }
}

export default Card;
