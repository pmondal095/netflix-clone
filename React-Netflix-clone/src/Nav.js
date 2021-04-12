/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavbarBlack(true);
      } else {
        setNavbarBlack(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    // <nav className={`${navbarBlack && "nav__black"}`}>
      <div className={`nav ${navbarBlack && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png"
        />
        {/* https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png */}
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        />
      </div>
    // </nav>
  );
}

export default Nav;
