
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/movie-mania-logo-2.png";
import { Search } from "lucide-react";

import { useState} from "react";
export default function Header(prop) {
  const[toggle,setToggle]=useState(false);
  function toggleInput(){
    setToggle(!toggle);
  }
  const [query]=useState([]);
  return (
    <div className="nav-container">
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/" className="main-logo">
            <img src={logo} alt="Movie Mania" />
          </Link>
        </div>
        <div className="menu-section">
          <div className="nav-section3">
            <div className="nav-box">
              <Link to="/search" className="nav-list-link">
                <input type="text" placeholder="Search here...." className= {toggle?"search-input1 search-input2":"search-input1"}
                  onKeyUp={(e)=>{
                    prop.setQuery(e.target.value);
                    console.log(query);
                  }}
                />
                <Search className="search-icon" onClick={toggleInput}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const [toggle, setToggle] = useState(false);
// const toggleMenu = () => {
//   setToggle(!toggle);
// }
//   return (
//     <div className="nav-container">
//       <div className="nav-main">
//         <div className="nav-logo">
//           <Link to="/" className="main-logo">
//             <img src={logo} alt="Movie Mania" />
//           </Link>
//         </div>
//         <div className="menu-section">
//           <div className={toggle ? "nav-items nav-items2" : "nav-items"}>
//             <div className="nav-box">
//               <Link to="/" className="nav-list-link">Movies</Link>
//             </div>
//             <div className="nav-box"><Link to={`/${movies.top_rated}`}className="nav-list-link">TopRated</Link></div>
//             <div className="nav-box"><Link to={`/${movies.popular}}`} className="nav-list-link">Popular</Link></div>
//             <div className="nav-box"><Link to={`/${movies.upcoming}`} className="nav-list-link">UpComing</Link></div>
//           </div>
//           <div className="nav-section3">
//             <div className="nav-box">
//               <Link to="/" className="nav-list-link"><Search className="search-icon" /></Link>
//             </div>
//             <div className="nav-box">
//               <span><Menu className="menu-icon" onClick={toggleMenu} /></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
