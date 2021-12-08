import React from "react";
import "../Sub/Sub.scss";
import coin from "../../assets/images/coin-transparent.gif";

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
        <img src={coin} className="coin__crypto" alt="coin" />
      </div>
    </div>
  );
}
