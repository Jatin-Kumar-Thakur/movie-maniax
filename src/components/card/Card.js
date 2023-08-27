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
    }, 1000);
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
          <Link to={`/movie/${prop.movie.id}`} className='movie-poster-link' key={prop.movie.id}>
            <article className="category-card">
              <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/original/${prop.movie && prop.movie.poster_path}`} alt="Poster" key={prop.movie.id} />
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
