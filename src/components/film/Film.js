import React from "react";

class Film extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const film = this.props.filmObject;
        return (
            <div>
                <img src={film.imgLink}/>
                <h1>{film.name}</h1>
                <p>Année : {film.year}</p>
                <p>Durée : {film.duration}</p>
                <p>Synopsis : {film.synopsis}</p>
            </div>);
    }

}

export default Film;
