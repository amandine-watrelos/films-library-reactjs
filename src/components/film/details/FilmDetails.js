import {useEffect, useState} from "react";
import FilmController from "../../../controllers/FilmController";
import noFilmImage from "../../../assets/no_valid_image.jpg";
import './FilmDetails.css';

const FilmDetails = (props) => {

    const [film, setFilm] = useState(null);

    useEffect(() => {
        getFilmById(props.match.params.id);
    }, []);

    const getFilmById = async (id) => {
        try {
            const filmObject = await FilmController.getFilmById(id);
            setFilm(filmObject);
        } catch (e) {
            console.log('Error while retrieving films list',e)
        }
    }

    if (film === null) return (<p>Chargement..</p>);

    const imgLink = film.poster_path !== null ? `${process.env.REACT_APP_IMG_API_URL}/${film.poster_path}` : noFilmImage;
    const releaseDate = film.release_date ? ` (${film.release_date.split('-')[0]})` : '';
    const overview = film.overview? film.overview : 'Aucune information disponible.';
    const genres = film.genres.map(genre => <li className="genre-name">{genre.name}</li>);

    return (
        <section className="film-details-container">
            <img src={imgLink} alt="Film poster" className="col-md-3"/>
            <div className="col-md-6">
                <h3>{film.title} {releaseDate}</h3>
                <ul>{genres}</ul>
                <p>Note moyenne : {film.vote_average}/10 ({film.vote_count} votes)</p>
                <p className="">Synopsis : {overview}</p>
            </div>
        </section>);

}

export default FilmDetails;
