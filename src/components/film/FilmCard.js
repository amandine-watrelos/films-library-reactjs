import React from "react";
import './FilmCard.css'

const FilmCard = ({film}) => {

    return (
        <div className="card col-md-3 d-inline-block">
            <img src={film.imgLink} alt="{film.name}" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{film.name} ({film.year})</h5>
                <p>Durée : {film.duration}</p>
                <p className="card-text">Synopsis : {film.synopsis}</p>
            </div>
        </div>);

}

export default FilmCard;
