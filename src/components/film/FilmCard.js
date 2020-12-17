import './FilmCard.css';
import PropTypes from 'prop-types';
import noFilmImage from './../../assets/no_valid_image.jpg';

const FilmCard = ({film}) => {

    FilmCard.defaultProps = {
        film : PropTypes.object.isRequired,
    }

    const imgLink = film.backdrop_path !== null ? `${process.env.REACT_APP_IMG_API_URL}/${film.backdrop_path}` : noFilmImage;
    const releaseDate = film.release_date ? ` (${film.release_date.split('-')[0]})` : '';
    const overview = film.overview? film.overview : 'Aucune information disponible.'

    return (
        <div className="card col-md-3 d-inline-block">
            <img src={imgLink} alt="Film poster" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{film.title} {releaseDate}</h5>
                <p>Note moyenne : {film.vote_average}</p>
                <p className="card-text">Synopsis : {overview}</p>
            </div>
        </div>);

}

export default FilmCard;
