import React from 'react'
import './MovieDetail.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import HomeCategory from '../home/HomeCategory';
export default function MovieDetail() {
    const { id } = useParams();
    // console.log(`${id}`);
    const [movie, setMovie] = useState([])
    const [category, setCategory] = useState([]);
    const [language, setLanguage] = useState([]);
    const api = `https://api.themoviedb.org/3/movie/${id}?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US`;
    // const api="https://api.themoviedb.org/3/movie/popular?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US";
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data);
            setCategory(data.genres);
            setLanguage(data.spoken_languages);
            // console.log(data.spoken_languages);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(api);
    }, [api])
    return (
        <div className='movie-main'>
            <div className="movie-container">
                <div className="movie-detail-section">
                    <div className="movie-poster">
                        <div className="poster-container">
                            <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt="hello" />
                        </div>
                        {/* <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="hello" /> */}
                    </div>
                    <div className="movie-detail" key={id}>
                        <h1>{movie.title}</h1>
                        <h3>{movie.tagline}</h3>
                        <div className="movie-type">
                            {
                                category.map(cat => (
                                    <p>{cat.name}</p>
                                ))
                            }
                        </div>
                        <p className="over-view"><p>OverView</p>{movie.overview}</p>
                        <p className='lan'><span>Language: </span> <span className="extra-info">{language.map(lan => (
                            <span className="extra-info">{lan.english_name} </span> 
                        ))}</span></p>
                        <p className='rating'><span>Rating:</span> <span className='extra-info'>{movie.vote_average}/10</span></p>
                        <div className="status">
                            <p><span>Status:</span> <span className='extra-info'>{movie.status}</span></p>
                            <p><span>Release Date:</span> <span className='extra-info'>{movie.release_date}</span></p>
                            <p><span>Run Time:</span> <span className='extra-info'><span className='extra-info'>{movie.runtime}min</span></span></p>
                        </div>
                    </div>
                </div>
                <HomeCategory name="Similar Movies" category={`${id}/similar`}/>
                <HomeCategory name="Recommended" category={`${id}/recommendations`}/>
            </div>
        </div>
    )
}
