import * as axios from "axios";

const tmdbAPI = '619e6b54477dcd363899f6f2d3dc1ed1';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search'
});

export const moviesAPI = {
    getMovies(lang, movieName) {
        return instance.get('/multi', {
            params: {
                api_key: tmdbAPI,
                language: lang,
                query: movieName
            }
        })
            .then(response => {
                console.log(response);
                return response.data;
            })
    }
};
// https://api.themoviedb.org/3/search/multi?api_key=619e6b54477dcd363899f6f2d3dc1ed1&language=ru&query=star&page=3