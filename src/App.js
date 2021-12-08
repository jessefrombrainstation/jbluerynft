import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import spaceground from "./assets/images/spaceground-with-footer.png";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Ether from "./components/Eth/Eth";
import Nft from "./components/Nft/Nft";
import Sub from "./components/Sub/Sub";
import Original from "../src/assets/images/jbluery-ufo-og.png";
import NFTs from "../src/assets/images/pink-sauce-nft-first-edition.png";
import "../src/components/Board/Board.scss";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <Navigation />
      <Hero />
      <div className="board">
        <p className="intro">
          Yes, that UFO you saw in the nightskies was just actually our SPACE
          BAR lounge. That abduction beam of light that picked up your neighbor
          was actually just another new member joining us!
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
        <img
          src={NFTs}
          className="nft"
          alt="nft"
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
      <div className="App">
        <header className="spaceground"></header>
        <img src={spaceground} className="spaceground" alt="spaceground" />
      </div>
      <Ether />
      {show ? (
        <div className="nftcontainer">
          <button
            className="closebutton"
            onClick={() => {
              setShow(false);
            }}
          >
            close
          </button>
          <Nft />
        </div>
      ) : (
        <></>
      )}
      <Sub />
    </Router>
  );
}

export default App;
