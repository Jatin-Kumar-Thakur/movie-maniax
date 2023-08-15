import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/movie-mania-logo-2.png";
import { Menu } from "lucide-react";
// import { Search, Menu } from "lucide-react";
import { useState } from "react";
// import { useState ,useEffect} from "react";
export default function Header() {
  // const [movies, setMovies] = useState([])
  // const api = `https://api.themoviedb.org/3/movie/${movies}?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US`;
  // const fetchApiData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setMovies(data.results);
  //     // console.log(data.results);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchApiData(api);
  // }, [])
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
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
          <div className={toggle ? "nav-items nav-items2" : "nav-items"}>
            {/* <div className="nav-box">
              <Link to="/" className="nav-list-link">Movies</Link>
            </div> */}
            {/* <div className="nav-box"><Link to={`/${movies.top_rated}`}className="nav-list-link">TopRated</Link></div>
            <div className="nav-box"><Link to={`/${movies.popular}}`} className="nav-list-link">Popular</Link></div>
            <div className="nav-box"><Link to={`/${movies.upcoming}`} className="nav-list-link">UpComing</Link></div> */}
          </div>
          <div className="nav-section3">
            {/* <div className="nav-box">
              <Link to="/" className="nav-list-link"><Search className="search-icon" /></Link>
            </div> */}
            <div className="nav-box">
              <span><Menu className="menu-icon" onClick={toggleMenu} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
