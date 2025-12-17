import { useEffect, useState } from 'react';
import './ItemsDetail.css';
import { useNavigate, useParams } from 'react-router';
import { ArrowBigLeft, Star } from 'lucide-react';


export default function ItemsDetail({}) {

    const {id} = useParams();
    const [details, setDetails] = useState({});
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=c7ccac77`)
            .then(result => result.json())
            .then(data => setDetails(data)); 
    }, [id]);

    const goBack = () => {
        navigate('/catalogue')
    }



    return (
    <>
        <button onClick={goBack}><ArrowBigLeft /></button>
        <div className='container'>
        <div onClick={() => setFavorite(prev => !prev)}>
        {favorite && (
            <Star size={48} color="#d4d80e" />        
        )}
        {!favorite && (
            <Star  size={48} color="#000000" />
        )}
        </div>
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
    </>
    )
}