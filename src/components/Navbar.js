import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      {/* <header className="headerNav">
        <img className="logo" src="./images/logo.png" alt="logo" /> */}

      {/* <nav >
          <ul >
            <li>
              <a href="#">Who We Are</a>
            </li>
            <li>
              <a href="./bout">BoAT</a>
            </li>
            <li>
              <a href="./media">Media</a>
            </li>
            <li>
              <a href="./blog">Blog</a>
            </li>
            <li>
              <a href=".subsediaries">Subsediaries</a>
            </li>
            <li>
              <a href="career">Career</a>
            </li>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button> */}

      <div className="container">
        <div>
          <img className="logo" src="./images/logo.png" alt="logo" />
        </div>
        <div className="headerNames">
          <h5>
            <a href=" home">Who We Are</a>
          </h5>
          <h5>
            <a href="./boat">BoAT</a>
          </h5>
          <h5>
            <a href="./media">Media</a>
          </h5>
          <h5>
            <a href="./blog">Blog</a>
          </h5>
          <h5>
            <a href=".subsediaries">Subsediaries</a>
          </h5>
          <h5>
            <a href="career">Career</a>
          </h5>
          {/* <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button> */}
        </div>
          {/* <button>
            <FaBars/>
            </button> */}
      </div>
    </>
  );
}

export default Navbar;
