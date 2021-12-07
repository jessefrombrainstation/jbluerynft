import React from "react";
import SpaceBar from "../../assets/images/spacebar-large.png";
import PinkSauce from "../../assets/images/pink-sauce-logo.png";
import "../Hero/Hero.scss";

export default function Hero() {
  return (
    <div className="hero-banner">
      <img src={SpaceBar} className="spacebar" alt="spacebar" />
      <img src={PinkSauce} className="pinksauce-logo" alt="pinksauce-logo" />
    </div>
  );
}
