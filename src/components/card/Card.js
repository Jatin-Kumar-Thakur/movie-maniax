import React from 'react'
import './Card.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export default function Card(prop) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {
        loading ?
          <div className='card-main'>
            <SkeletonTheme color="202020" highlightColor='#444'>
              <Skeleton height={300} duration={2} />
            </SkeletonTheme>
          </div>
          :
          // <Link Link to={`movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          //   <div className="card-main">
          //     <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="Card" />
          //   </div>
          // </Link >
          <Link to={`/movie/${prop.movie.id}`} className='movie-poster-link'>
            <article className="category-card">
              <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/original/${prop.movie && prop.movie.poster_path}`} alt="Poster" />
              </div>
              <div className="card-overlay">
                <div className="title">
                  <span className='card-title'>{prop.movie.title}</span>
                  <p>{prop.movie.vote_average}/10</p>
                </div>
                <p className='card-release-date'>{prop.movie.release_date}</p>
              </div>
            </article>
          </Link>
      }
    </>
  )
}
