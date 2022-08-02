import React from "react";
import "./Header.css";
import { BiMenu, BiBoltCircle } from 'react-icons/bi';

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <div className="icon">
            <BiBoltCircle/>
          </div>
          <span className="nav_logo">Build</span>
          <span className="nav_logo_2">Estate</span>
        </div>
        <ul className="nav_list">
          <li className="nav_item">
            <a href="home" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="home" className="nav_link">
              How it´s work
            </a>
          </li>
          <li className="nav_item">
            <a href="home" className="nav_link">
              Agent
            </a>
          </li>
          <li className="nav_item">
            <a href="home" className="nav_link">
              Sales
            </a>
          </li>
        </ul>
          <a href="contact" className="button">
            Contact Us
          </a>
          <div className="nav_icon">
            <BiMenu/>
          </div>
      </header>
    </>
  );
};

export default Header;
