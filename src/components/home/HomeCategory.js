import React from 'react'
import './HomeCategory.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card.js'


export default function HomeCategory(prop) {
  // const [temp]=useState("temp");
  const [topMovies, setTopMovies] = useState([])
  const api = `https://api.themoviedb.org/3/movie/${prop.category}?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US`;
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
      // console.log(data.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiData(api);
  }, [api]);
  return (
    <div className='home-category-main'>
      <div className="home-category-container">
        <div className="category-title">
          <h2>{prop.name}</h2>
          <p><Link to={`/${prop.category}`}>See More</Link></p>
        </div>
        <div className="category-card-section">

          {
            topMovies.map(movie => (
              <Card movie={movie} key={movie.id} />
              // <Link to={`/movie/${movie.id}`} className='movie-poster-link'>
              //   <article className="category-card">
              //     <div className="card-image">
              //       <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="hello" />
              //     </div>
              //     <div className="card-overlay">
              //     </div>
              //   </article>
              // </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
