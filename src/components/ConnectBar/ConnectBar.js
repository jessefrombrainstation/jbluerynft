import React from "react";
import discord from "../../assets/images/join-our-club.png";
import instagram from "../../assets/images/follow-on-the-gram.png";
import twitter from "../../assets/images/trending-on-twitter.png";
import "../ConnectBar/ConnectBar.scss";

function ConnectBar() {
  return (
    <div className="connect-container">
      <div className="connect-container__icons">
        <a href="https://discord.gg/WvuxmvUT">
          <img
            src={discord}
            className="connect-container__icon"
            alt="join-our-club"
          />
        </a>
        <a href="https://www.instagram.com/jbluery/?hl=en">
          <img
            src={instagram}
            className="connect-container__icon"
            alt="follow-on-the-gram"
          />
        </a>
        <a href="https://twitter.com/jbluery">
          <img
            src={twitter}
            className="connect-container__icon"
            alt="trending-on-twitter"
          />
        </a>
      </div>
    </div>
  );
}

export default ConnectBar;
