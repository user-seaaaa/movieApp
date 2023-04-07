import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({id, coverImg, title, year ,summary, genres}){
    return (
        <div className={style.movie}>
            <img className={style.movie__img} src={coverImg} alt={title}/>
            <div>
                <h2 className={style.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={style.movie__year}>{year}</h3>
                <div>
                    {summary != null ? (
                    <p className={style.movie__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    ): ""}
                </div>
                <ul className={style.movie__genres}>
                    {genres.map(g => <li key= {g}>{g}</li>)}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes  = {
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;