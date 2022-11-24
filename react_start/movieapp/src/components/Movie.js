import Proptypes from "prop-types";
import { Link } from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}) {
    return(
    <div className="movie">
        <img src={coverImg} alt={title} />
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    );
}

Movie.prototype = {
    id:Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Movie;