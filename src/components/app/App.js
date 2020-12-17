import './App.css';
import FilmCard from '../film/FilmCard';
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchbar/SearchBar";
import React from "react";
import FilmController from '../../controllers/FilmController';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            films : [],
            searchKeyword : '',
            filmsRendered : '',
            appName : 'Films library'
        }
        this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
    }

    componentDidMount() {
        this.setFilmsList();
    }

    async setFilmsList() {
        try {
            const filmsList = await FilmController.getFilmsList();
            this.setState({
                films: filmsList.results,
                filmsRendered: filmsList.results.map(film => <FilmCard film={film} key={film.id}/>)
            });
        } catch (e) {
            console.log('Error while retrieving films list',e)
        }
    }

    updateSearchKeyword(e) {
        this.setState({
            searchKeyword : e.target.value
        }, () => {
            this.filterFilms(this.state.searchKeyword);
        });
    }

    filterFilms(keyword) {
        const filteredFilms = this.state.films.filter(film => film.title.toLowerCase().includes(keyword));
        this.setState({
            filmsRendered : filteredFilms.map(film => <FilmCard film={film} key={film.id}/>)
        });
    }

    render() {
        return (
            <div>
                <NavBar appName={this.state.appName}/>
                <SearchBar searchKeyword={this.state.searchKeyword} updateSearchKeyword={this.updateSearchKeyword}/>
                <div className="filmsList" style={{textAlign : 'center'}}>
                    {this.state.filmsRendered}
                </div>
            </div>
        );
    }

}

export default App;
