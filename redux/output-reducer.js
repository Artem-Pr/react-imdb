import {moviesAPI} from "../api/api";

const SET_MOVIES = 'SET_MOVIES';

let initialState = {
    movies: null
};

const outputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
};

export const setMovies = (movies) => ({type: SET_MOVIES, movies});

export const getMovies = (lang, searchText) => {
    return (dispatch) => {
        moviesAPI.getMovies(lang, searchText)
            .then(data => {
                dispatch(setMovies(data.results))
            });
    }
};

export default outputReducer;