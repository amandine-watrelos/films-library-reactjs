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

    renderOriginalList() {
        this.setState({
            filmsRendered: this.state.films.map(film => <FilmCard film={film} key={film.id}/>)
        });
    }

    updateSearchKeyword(e) {
        const keyword = e.target.value;
        this.setState({
            searchKeyword : keyword
        }, () => {
            keyword !== "" ? setTimeout(() => this.filterFilms(this.state.searchKeyword), 3000) : this.renderOriginalList();
        });
    }

    async filterFilms(keyword) {
        try {
            const filmsList = await FilmController.searchFilm(keyword);
            const filteredFilms = filmsList.results.filter(film => film.title.toLowerCase().includes(keyword));
            this.setState({
                filmsRendered: filteredFilms.map(film => <FilmCard film={film} key={film.id}/>)
            });
        } catch (e) {
            console.log('Error while filtering films list',e)
        }
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
