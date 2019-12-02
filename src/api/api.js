import * as axios from "axios";

const tmdbAPI = '619e6b54477dcd363899f6f2d3dc1ed1';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const moviesAPI = {
    getMovies(lang, movieName, page) {
        return instance.get('/search/movie', {
            params: {
                api_key: tmdbAPI,
                language: lang,
                query: movieName,
                page: page,
                include_adult: false
            }
        })
    },

    getDetails(lang, movieId) {
        return instance.get(`/movie/${movieId}`, {
            params: {
                api_key: tmdbAPI,
                language: lang
            }
        })
    }
};