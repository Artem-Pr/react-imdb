import * as axios from "axios";

const tmdbAPI = '619e6b54477dcd363899f6f2d3dc1ed1';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const moviesAPI = {
    getMovies(lang, movieName, page) {
        console.log('Request - movies');
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
        console.log('Request - details');
        return instance.get(`/movie/${movieId}`, {
            params: {
                api_key: tmdbAPI,
                language: lang
            }
        })
    },

    discoverMovies(lang, page) {
        console.log('Request - discover');
        let today = new Date();
        let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
        let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        lastDayOfMonth = lastDayOfMonth.getFullYear() + '-' + lastDayOfMonth.getMonth()+1 + '-' + lastDayOfMonth.getDate();
        firstDayOfMonth = firstDayOfMonth.getFullYear() + '-' + firstDayOfMonth.getMonth()+1 + '-01';
        // console.log('firstDayOfMonth - ' + firstDayOfMonth);
        // console.log('lastDayOfMonth - ' + lastDayOfMonth);
        return instance.get(`/discover/movie`, {
            params: {
                api_key: tmdbAPI,
                language: lang,
                // sort_by: "popularity.desc",
                // sort_by: "vote_average.desc",
                "primary_release_date.gte": firstDayOfMonth,
                "primary_release_date.lte": lastDayOfMonth,
                // certification: "R",
                include_adult: false,
                include_video: false,
                page: page
            }
        })
    }
};