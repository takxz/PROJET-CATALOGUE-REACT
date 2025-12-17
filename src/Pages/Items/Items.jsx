import { Link } from 'react-router';
import './Items.css';


export default function Items({ movie }) {

    return (
        <Link to={`/catalogue/${movie.imdbID}`} className='user'>
            <div className="header">
                <div className="picture">
                    <img src={movie.Poster}  />
                </div>
            </div>
            <div className="content">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </Link>
    )
}