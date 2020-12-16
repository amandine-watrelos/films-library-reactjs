import './App.css';
import FilmCard from '../film/FilmCard';
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchbar/SearchBar";
import React from "react";

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
        const films = [
            {
                id : 1,
                name : "Forrest Gump",
                year : 1994,
                imgLink : "https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg",
                duration : "2h20",
                synopsis : "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump."
            },{
                id : 2,
                name : "La ligne verte",
                year : 2000,
                imgLink : "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
                duration: "3h09",
                synopsis : "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s’efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide aux dons magiques, Edgecomb va tisser avec lui des liens très forts."
            },{
                id : 3,
                name : "La liste de Schindler",
                year : 1994,
                imgLink : "https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/14/10/37/5927961.jpg",
                duration: "3h15",
                synopsis : "Evocation des années de guerre d'Oskar Schindler, fils d'industriel d'origine autrichienne rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique et en 1944 sauver huit cents hommes et trois cents femmes du camp d'extermination de Auschwitz-Birkenau."
            }
        ]
        this.setState( {
            films :  films,
            filmsRendered : films.map(film => <FilmCard film={film} key={film.id}/>)
        });
    }

    updateSearchKeyword(e) {
        this.setState({
            searchKeyword : e.target.value
        }, () => {
            this.filterFilms(this.state.searchKeyword);
        });
    }

    filterFilms(keyword) {
        const filteredFilms = this.state.films.filter(film => film.name.toLowerCase().includes(keyword));
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
