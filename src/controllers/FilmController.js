export default class FilmController {

    static async getFilmsList(pageNumber) {
        try {
            const filmsList = await fetch(`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${pageNumber}`);
            return filmsList.json();
        } catch (e) {
            console.log('Error while fetching request',e);
        }
    }

    static async searchFilm(keyword) {
        try {
            const filmsList = await fetch(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&include_adult=false&page=1&query=${keyword}`);
            return filmsList.json();
        } catch (e) {
            console.log('Error while fetching request',e);
        }
    }

    static async getFilmById(id) {
        try {
            const film = await fetch(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`);
            return film.json();
        } catch (e) {
            console.log('Error while fetching request',e);
        }
    }

}
