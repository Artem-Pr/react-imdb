import * as axios from "axios";

const tmdbAPI = '619e6b54477dcd363899f6f2d3dc1ed1';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search'
});

export const moviesAPI = {
    getMovies(lang, movieName, page) {
        return instance.get('/movie', {
            params: {
                api_key: tmdbAPI,
                language: lang,
                query: movieName,
                page: page
            }
        })
    }
};