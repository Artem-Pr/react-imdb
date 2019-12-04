import {moviesAPI} from "../api/api";

const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
const SET_POSTER_URL = 'SET_POSTER_URL';

let initialState = {
    movieDetails: null,
    posterBaseUrl: 'https://image.tmdb.org/t/p/w300',
    posterUrl: ''
};

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.movieDetails
            };
        case SET_POSTER_URL:
            return {
                ...state,
                posterUrl: action.posterUrl
            };
        default:
            return state;
    }
};

export const setMovieDetails = (movieDetails) => ({type: SET_MOVIE_DETAILS, movieDetails});
export const setPosterUrl = (posterUrl) => ({type: SET_POSTER_URL, posterUrl});

export const getDetails = (lang, movieId) => {
    return (dispatch) => {
        moviesAPI.getDetails(lang, movieId)
            .then(response => {
                dispatch(setMovieDetails(response.data));
            });
    }
};

export const getPosterUrl = (shortPosterUrl, posterBaseUrl) => {
    return (dispatch) => {
        if (shortPosterUrl) dispatch(setPosterUrl(posterBaseUrl + shortPosterUrl))
        else dispatch(setPosterUrl(''));
    }
};

export default detailsReducer;