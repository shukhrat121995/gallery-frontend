import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import SearchPage from "./SearchBar";
import "./Button.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(
    window.location.href.split("/").pop() === "" ||
      window.location.href.split("/").pop() === "?query="
      ? "home"
      : window.location.href.split("/").pop()
  );

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const activeNavigation = (title) => {
    setActive(title);
  };

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  return (
    <>
      <nav className="navbar">
        <Link
          to="/?query="
          className={
            active === "home" &&
            (query.get("query") === "" || query.get("query") === null)
              ? "navbar-logo"
              : "navbar-logo-off"
          }
          onClick={() => {
            closeMobileMenu();
            activeNavigation("home");
          }}
        >
          <img
            src={
              active === "home" &&
              (query.get("query") === "" || query.get("query") === null)
                ? require("../../images/icon_blue.png").default
                : require("../../images/icon_white.png").default
            }
            alt="logo"
          />
        </Link>
        <SearchPage />
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/?query="
              className={
                active === "home" &&
                (query.get("query") === "" || query.get("query") === null)
                  ? "nav-links nav-links-on"
                  : "nav-links"
              }
              onClick={() => {
                closeMobileMenu();
                activeNavigation("home");
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                active === "about" &&
                (query.get("query") === "" || query.get("query") === null)
                  ? "nav-links nav-links-on"
                  : "nav-links"
              }
              onClick={() => {
                closeMobileMenu();
                activeNavigation("about");
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/characters"
              className={
                active === "characters" &&
                (query.get("query") === "" || query.get("query") === null)
                  ? "nav-links nav-links-on"
                  : "nav-links"
              }
              onClick={() => {
                closeMobileMenu();
                activeNavigation("characters");
              }}
            >
              Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className={
                active === "contact-us" &&
                (query.get("query") === "" || query.get("query") === null)
                  ? "nav-links nav-links-on"
                  : "nav-links"
              }
              onClick={() => {
                closeMobileMenu();
                activeNavigation("contact-us");
              }}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/license"
              className="nav-links-mobile"
              onClick={() => {
                closeMobileMenu();
                activeNavigation("license");
              }}
            >
              License
            </Link>
          </li>
        </ul>
        <Link to="/license">
          <button
            className={
              active === "license" &&
              (query.get("query") === "" || query.get("query") === null)
                ? "btn btn-on"
                : "btn"
            }
            onClick={() => {
              closeMobileMenu();
              activeNavigation("license");
            }}
          >
            License
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
