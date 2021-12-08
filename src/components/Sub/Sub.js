import React from "react";
import "../Sub/Sub.scss";
import coin from "../../assets/images/coin-transparent.gif";

export default function Sub() {
  return (
    <div>
      <form className="sub">
        <label>
          <input
            className="sub__email"
            type="email"
            name="email"
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
