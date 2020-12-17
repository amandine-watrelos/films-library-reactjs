export default class FilmController {

    static async getFilmsList() {
        try {
            const filmsList = await fetch(`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&sort_by=vote_count.desc&include_adult=true&include_video=false&page=1`);
            return filmsList.json();
        } catch (e) {
            console.log('Error while fetching request',e);
        }
    }

}
