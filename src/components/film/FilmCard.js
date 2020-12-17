import './FilmCard.css';
import PropTypes from 'prop-types';


const FilmCard = ({film}) => {

    FilmCard.defaultProps = {
        film : PropTypes.object.isRequired,
    }

    const imgLink = `${process.env.REACT_APP_IMG_API_URL}/${film.backdrop_path}`;

    return (
        <div className="card col-md-3 d-inline-block">
            <img src={imgLink} alt="{film.name}" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{film.title} ({film.release_date.split('-')[0]})</h5>
                <p>Note moyenne : {film.vote_average}</p>
                <p className="card-text">Synopsis : {film.overview}</p>
            </div>
        </div>);

}

export default FilmCard;
