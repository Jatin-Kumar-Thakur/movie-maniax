import React, { useEffect, useState } from 'react'
import './Search.css';
import Card from '../card/Card';

export default function Search(prop) {
    const [searchData, setSearchData] = useState([]);
    // const api = `https://api.themoviedb.org/3/search/movie?query=${searchData}&api_key=4bf73e8e0478d507ae91abf15f8bd79f`;
    const api = `https://api.themoviedb.org/3/search/movie?query=${prop.query}&api_key=4bf73e8e0478d507ae91abf15f8bd79f`;
    const fetchApiData = async (url) => {
        try {
            const result = await fetch(url);
            const data = await result.json();
            setSearchData(data.results);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApiData(api);
    }, [api]);
    return (
        <div className='search-main'>
            <div className="search-container">
                <div className="category-result">
                    {
                        searchData.map(movie=>(
                            <Card movie={movie} className="category-card" key={movie.id}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
