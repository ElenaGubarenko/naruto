import Phaser from "phaser";
import React, { Component, useEffect, useState } from "react";
import Card from "../Card";
import cardsConfig from "../../cardsConfig";
import back from "../../Assets/background.jpg";
import cardBack from "../../Assets/cardBack.png";
import henata from "../../Assets/henata-card.png";
import kakashi from "../../Assets/kakashi-card.png";
import naruto from "../../Assets/naruto-card.png";
import sakura from "../../Assets/sakura-card.png";
import saske from "../../Assets/saske-card.png";

const cardsArr = [henata, kakashi, naruto, sakura, saske];

// function Game() {

//   // function preload() {
//   //   this.load.image("back", back);
//   //   // cardsArr.map((card) => this.load.image("card", card));

//   //   // this.load.image("cardBack", cardBack);
//   // }

//   // function createCards() {
//   //   this.cards = [];
//   //   let counter = 0;
//   //   let positions = this.getCardsPositions();

//   //   Phaser.Utils.Array.Shuffle(positions);

//   // cardsConfig.cards.map((card) => {
//   //   for (let i = 0; i < 2; i++) {
//   //     this.cards.push(new Card(this, card, positions[counter], "cardBack"));
//   //     counter += 1;
//   //   }
//   // });

//   // this.input.on("gameobjectdown", this.onCardClicked, this);
//   // }

//   // function getCardsPositions() {
//   //   let positions = [];
//   //   let cardTexture = this.textures.get("cardBack").getSourceImage();
//   //   let cardWidth = cardTexture.width + 7;
//   //   let cardHeight = cardTexture.height + 7;
//   //   let paddingX =
//   //     (this.sys.game.config.width - cardWidth * cardsConfig.cols) / 2;
//   //   let paddingY =
//   //     (this.sys.game.config.height - cardHeight * cardsConfig.rows) / 2;

//   //   for (let row = 0; row < cardsConfig.rows; row++) {
//   //     for (let col = 0; col < cardsConfig.cols; col++) {
//   //       positions.push({
//   //         x: col * cardWidth + paddingX,
//   //         y: row * cardHeight + paddingY,
//   //       });
//   //     }
//   //   }
//   //   return positions;
//   // }

//   // function create() {
//   //   this.add.image(
//   //     this.sys.game.config.width / 2,
//   //     this.sys.game.config.height / 2,
//   //     "back"
//   //   );
//   // }

//   // function update() { }

//   return <div className="Game">Game</div>;
// }

class Game extends Phaser.Scene {


  preload() {
    this.load.image("back", back);
  }

  create() {
    this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      "back"
    );
  }
}

export default Game;
