import React from 'react'
import './Category.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';

export default function Category(prop) {
    const {category} = useParams();
    const title=category.toUpperCase();
    console.log(title);
    const [categoryes, setCategory] = useState([])
    const api = `https://api.themoviedb.org/3/movie/${category}?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US`;
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCategory(data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(api);
    }, [api])
    return (
        <div className='category-main'>
            <div className="category-container">
                <div className="category-name">{title}</div>
                <div className="category-result">
                    {
                        categoryes.map(movie => (
                            <Card movie={movie} className="category-card" key={movie.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
