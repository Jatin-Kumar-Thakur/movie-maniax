import React from 'react'
import './Header.css'
import searchIcon from '../assets/Search-icon.png';
import logo from '../assets/movie-mania-logo.png'
export default function Header() {
  return (
    <div className='header-container'>
      <div className="header-main">
        <div className="header-logo">
            <img src={logo} alt="Movie Mania" />
        </div>
        <div className="header-search-bar"> 
            <div className="search-bar">
                <form>
                    <div className="search-row">
                        <input type="text" placeholder='Search...' />
                        <span className="search-logo"><img src={searchIcon} alt="Search-icon" /></span>
                    </div>
                </form>
            </div>
        </div>

      </div>
    </div>
  )
}
