import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/movie-mania-logo-2.png";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [toggle,setToggle]=useState(false);
  const toggleMenu=()=>{
      setToggle(!toggle);
  }
  return (
    <div className="nav-container">
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/" className="main-logo">
            <img src={logo} alt="Movie Mania" />
          </Link>
        </div>
        <div className="menu-section">
          <div className={toggle ? "nav-items nav-items2":"nav-items"}>
            <div className="nav-box">
              <Link to="/" className="nav-list-link">Movies</Link>
            </div>
            <div className="nav-box">
              <Link to="/" className="nav-list-link">Tv-Shows</Link>
            </div>
          </div>
          <div className="nav-section3">
            <div className="nav-box">
              <Link to="/" className="nav-list-link"><Search className="search-icon" /></Link>
            </div>
            <div className="nav-box">
              <span><Menu className="menu-icon" onClick={toggleMenu}/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
