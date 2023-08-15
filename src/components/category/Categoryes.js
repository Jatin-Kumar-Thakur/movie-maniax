import React from 'react'
import './Category.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';

export default function Category(prop) {
    // const [temp]=useState("temp");
    const {category} = useParams();
    // console.log(category);
    const [categoryes, setCategory] = useState([])
    const api = `https://api.themoviedb.org/3/movie/${category}?api_key=4bf73e8e0478d507ae91abf15f8bd79f&language=en-US`;
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
    }, [api])
    return (
        <div className='category-main'>
            <div className="category-container">
                <div className="category-name">{category}</div>
                <div className="category-result">
                    {
                        categoryes.map(movie => (
                            <Card movie={movie} className="category-card"/>
                            // <h1>hello</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}