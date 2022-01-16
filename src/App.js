import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import spacegroundTop from "./assets/images/spaceground-with-footer-top.png";
import spacegroundBttm from "./assets/images/spaceground-with-footer-bottom.png";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Ether from "./components/Eth/Eth";
import Nft from "./components/Nft/Nft";
import Sub from "./components/Sub/Sub";
import Original from "../src/assets/images/jbluery-ufo-og.png";
import NFTs from "../src/assets/images/pink-sauce-nft-first-edition.png";
import flightmap from "../src/assets/images/flightmap.png";
import missioncontrol from "../src/assets/images/mission-control.png";
import guimonitor from "../src/assets/images/interface-v2-released.gif";
import team from "../src/assets/images/team.png";
import teamportrait from "../src/assets/images/team-portrait.png";
import ConnectBar from "./components/ConnectBar/ConnectBar";
import "../src/components/Board/Board.scss";

function App() {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 4250));
  };

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(false);
      }
    });
  });

  return (
    <Router>
      <>
        {isLoading ? null : (
          <>
            <Navigation />
            <Hero />
            <div className="board">
              <p className="intro">
                Yes, that UFO you saw in the nightskies was just actually our
                SPACE BAR lounge. That abduction beam of light that picked up
                your neighbor was actually just another new member joining us!
              </p>
              <div className="og-container">
                <p className="og-info">
                  <img src={Original} className="og" alt="og" />
                  Our captain "pink" and his flying saucer "sauce" welcomes you
                  to our members-only club.
                  <br />
                  <br />
                  Being a member unlocks first dibs on new pink sauce NFT
                  releases.
                </p>
              </div>
              <p className="nft-info">
                With only 911 planned releases this is a very exclusive club.
                Most of pink and his flying saucer attributes are inspired by
                technology advancements, space crafts, race cars, art culture
                and cities. <br />
                <br />
                Stay tuned for our first edition launch!
                <br />
                Just launched! *12/17 2021*
                <br />
                SOLD OUT
              </p>
              <img
                src={NFTs}
                className="nft"
                alt="nft"
                onClick={() => {
                  setShow(true);
                }}
              />
              <p className="nft-flightmap">
                <img
                  src={flightmap}
                  className="flightmap"
                  alt="flightmap-pink-sauce-nft-2022"
                />
                <p className="nft-flightmap__goals1">
                  Abduct our cousins and make them join the team willingly
                </p>
                <p className="nft-flightmap__goals2">
                  Promote pink sauce NFT on a big mural in the heart of miami
                  during art basel week
                </p>
                <p className="nft-flightmap__goals3">
                  Release first edition *12/17 2021*
                </p>
                <p className="nft-flightmap__goals4">
                  Open space bar lounge on discord
                </p>
                <p className="nft-flightmap__goals6">drop merch</p>
                <p className="nft-flightmap__goals7">
                  Release second pack *01/11/22*
                </p>
                <p className="nft-flightmap__goals8">
                  Release third pack *hidden date*
                </p>
                <p className="nft-flightmap__goals9">
                  Release fourth pack *hidden date*
                </p>
                <p className="nft-flightmap__goals10">
                  Release arcade game playable with only verified pink sauce NFT
                  tokens
                </p>
                <p className="nft-flightmap__goals11">
                  Open space bar lounge in wynwood miami florida
                </p>
              </p>
              <p className="nft-missioncontrol">
                <img
                  src={missioncontrol}
                  className="missioncontrol"
                  alt="mission-control-pink-sauce-nft"
                />
                <a href="https://opensea.io/collection/pink-sauce">
                  <img
                    src={guimonitor}
                    className="monitor"
                    alt="mission-control-pink-sauce-nft-status"
                  />
                </a>
                <p className="nft-missioncontrol__status">
                  PACK v2 is now in orbit! LIMITED AVAILABILITY! <br /> Get your
                  Pink Sauce NFT tokens to gain access to our Space Bar Lounge.
                </p>
              </p>
              <p className="nft-team">
                <img src={team} className="team" alt="team-pink-sauce-nft" />
                <p className="nft-team__introduction">
                  Pink Sauce is one of jbluery's ART pieces local to Miami,
                  Florida. This iconic character can be found in mutiple murals
                  throughout wynwood "the art capital of the nation".
                  <br />
                  <br />
                  The team is ready to launch its fleet of 911 pink sauce NFTs
                  into space!
                  <br />
                  <img
                    src={teamportrait}
                    className="team-portrait"
                    alt="team-portrait-pink-sauce-nft"
                  />
                </p>
              </p>
            </div>
            <div className="App">
              <header className="spaceground"></header>
              <img
                src={spacegroundTop}
                className="spaceground__top"
                alt="spaceground"
              />
              <img
                src={spacegroundBttm}
                className="spaceground__bottom"
                alt="spaceground"
              />
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
            <ConnectBar />
          </>
        )}
      </>
    </Router>
  );
}

export default App;
