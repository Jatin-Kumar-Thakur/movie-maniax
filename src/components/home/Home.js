import React from 'react'
import './Home.css'
import HomeCategory from './HomeCategory.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Star } from 'lucide-react';
import { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../card/Card.js';
export default function Home() {
    const[movies,setMovies]=useState([])
    const api="https://api.themoviedb.org/3/movie/popular?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US";
    const fetchApiData = async(url)=>{
        try{
            const res= await fetch(url);
            const data= await res.json();
            setMovies(data.results);
            // console.log(data.results);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchApiData(api);
    },[])
    return (
        <div className='home-container'>
            <div className="home-slider" >
                <Carousel className='carousel-height'
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={1}
                    infiniteLoop={true}
                    showStatus={false}
                > 
                    {
                        movies.map(movie=>(
                            <Link to={`/movie/${movie.id}`} className='movie-poster-link'>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="hello" />
                                </div>
                                <div className="poster-detail">
                                    <div className="poster-title">{movie ? movie.original_title : ""}</div>
                                    <div className="poster-time-detail">{movie ? movie.release_date:""}
                                        <span className="poster-rating">Rating ({movie ? movie.vote_average:""}/10)</span>
                                    </div>
                                    <div className="poster-overview">
                                        {movie ? movie.overview:""}
                                    </div>
                                </div>
                            </Link>

                        ))
                    }
                </Carousel>
            </div>
            <HomeCategory name="Top Rated" category="top_rated"/>
            <HomeCategory name="Popular" category="popular"/>
            <HomeCategory name="UpComing" category="upcoming"/>
            {/* <Card /> */}
        </div>
    )
}
