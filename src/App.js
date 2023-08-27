import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDescription/MovieDetail"
import Footer from "./components/footer/Footer";
import Category from "./components/category/Categoryes";
import Search from "./components/search/Search";
import { useState } from "react";
function App() {
  const [query,setQuery]=useState(["love"]);
  return (
    <div className="App">
      <Router>
        <Navbar setQuery={setQuery}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
          <Route exact path="/:category" element={<Category />}></Route>
          <Route exact path="/search" element={<Search query={query}/>}></Route>
          {/* <Route exact path="*" element={<Home />}></Route> */}
        </Routes>
          <Footer />
      </Router>
    </div >
  );
}

export default App;
