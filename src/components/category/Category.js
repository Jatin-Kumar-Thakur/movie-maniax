import React from 'react'
import './Category.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';

export default function Category(prop) {
    const {type} = useParams();
    console.log(`${type}`);
    const [category, setCategory] = useState([])
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US`;
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCategory(data.results);
            // console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(api);
    }, [])
    return (
        <div className='category-main'>
            <div className="category-container">
                <div className="category-name">Top Rated</div>
                <div className="category-result">
                    {
                        category.map(movie => (
                            <Card movie={movie} className="category-card"/>
                            // <h1>hello</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
