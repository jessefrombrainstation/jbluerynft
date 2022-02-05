import React from "react";
import "../Sub/Sub.scss";
import coin from "../../assets/images/coin-transparent.gif";
import membersonly from "../../assets/images/verify-club-membership.png";
import { NavLink } from "react-router-dom";

export default function Sub() {
  return (
    <div>
      <form
        className="sub"
        action="https://formspree.io/f/xyyoyzrj"
        method="POST"
      >
        <label>
          <input
            className="sub__email"
            type="email"
            name="_replyto"
            placeholder="email"
          />
        </label>
        <input className="sub__btn" type="submit" value="submit" />
      </form>
      <div className="coin">
        <NavLink to="/lounge">
          <img src={coin} className="coin__crypto" alt="coin" />
        </NavLink>
        <NavLink to="/space-bar-lounge">
          <img
            src={membersonly}
            className="members-button__bottom"
            alt="vip-access"
          />
        </NavLink>
      </div>
    </div>
  );
}
