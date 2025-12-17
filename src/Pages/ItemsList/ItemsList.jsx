import { useEffect, useState } from 'react';
import './ItemsList.css';
import Items from '../Items/Items';


export default function ItemsList({}) {

    const [moviesList, setMoviesList] = useState([])
    const [title, setTitle] = useState("")


    const getMovieByTitle = () => {
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=c7ccac77`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            setMoviesList(data.Search)
        })
    }


    return (
        <div className=''>
            <h1>Catalogue des films</h1>
            <div className='search-bar'>
                <input type="text" placeholder='Titre du film' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <button onClick={getMovieByTitle}>Rechercher</button>
            </div>
            <div className='movies-details'>

                {moviesList.map((movie => <Items movie={movie} key={movie.imdbID} />))}
            </div>  
        </div>
    )
}