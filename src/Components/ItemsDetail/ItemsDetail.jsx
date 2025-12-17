import { useEffect, useState } from 'react';
import './ItemsDetail.css';
import { useParams } from 'react-router';


export default function ItemsDetail({}) {

    const {id} = useParams();
    const [details, setDetails] = useState({});

useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=c7ccac77`)
    .then(result => result.json())
    .then(data => setDetails(data)); 
}, [id]);

    return (
        <div className=''>
        <div className='movie-details-card'>
            <div className="header">
                <div className="picture">
                    <img src={details.Poster}  />
                </div>
            </div>
            <div className="content">
                <div className="title">{details.Title}</div>
                <div className="release-year">{details.Released}</div>
                <div className="genre">{details.Genre}</div>
                <div className='runtime'>{details.Runtime}</div>
                <div className="plot">{details.Plot}</div>
            </div>
        </div>
        </div>
    )
}