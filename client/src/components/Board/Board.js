import React from "react";
import Original from "../../assets/images/jbluery-ufo-og.png";
import NFTs from "../../assets/images/pink-sauce-nft-first-edition.png";
import "../Board/Board.scss";

export default function Board() {
  return (
    <div className="board">
      <p className="intro">
        Yes, that UFO you saw in the nightskies was just actually our SPACE BAR
        lounge. That abduction beam of light that picked up your neighbor was
        actually just another new member joining us!
      </p>
      <div className="og-container">
        <p className="og-info">
          <img src={Original} className="og" alt="og" />
          Our captain "pink" and his flying saucer welcomes you to our
          members-only club.
          <br />
          <br />
          Being a member unlocks first dibs on new pink sauce NFT releases.
        </p>
      </div>
      <p className="nft-info">
        With only 911 planned release this is a very exclusive club. Most of
        pink and his flying saucer attributes are inspired by technology
        advancements, space crafts, race cars, art culture and cities. <br />
        <br />
        Stay tuned for our first edition launch!
      </p>
      <img src={NFTs} className="nft" alt="nft" />
    </div>
  );
}
