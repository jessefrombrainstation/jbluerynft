import React from "react";
import "../Navigation/Navigation.scss";
import { NavLink } from "react-router-dom";
import access from "../../assets/images/verify-club-membership.png";

export default function Navigation() {
  return (
    <div>
      <a href="https://www.jbluery.com/">
        <nav className="NavBar"></nav>
      </a>
      <NavLink to="/space-bar-lounge">
        <img src={access} className="members-nav__top" alt="vip" />
      </NavLink>
    </div>
  );
}
